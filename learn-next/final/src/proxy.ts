import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { Database } from "@/utils/supabase/supabase"; // 💡 supabase.ts 타입 경로

// 💡 이 함수는 미들웨어에서만 사용할 별도의 Supabase 클라이언트입니다.
// 💡 server.ts나 client.ts의 것과는 다릅니다.
const createClient = (request: NextRequest) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value, options)
          );
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  return { supabase, response };
};

export async function proxy(request: NextRequest) {
  const { supabase, response } = createClient(request);

  // 💡 미들웨어의 핵심 역할: 모든 서버 컴포넌트 렌더링 전에
  // 💡 현재 사용자 세션을 가져와서 쿠키를 '새로고침'합니다.
  await supabase.auth.getUser();

  // 💡 새로고침된 쿠키가 포함된 응답을 반환합니다.
  return response;
}

// 💡 미들웨어가 실행될 경로를 지정합니다.
// 💡 불필요한 경로(_next/static, _next/image, favicon.ico 등)를 제외합니다.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};