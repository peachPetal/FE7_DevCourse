import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang: string }>;
}): Promise<Metadata> {
  // 비동기 통신의 결과를 메타데이터의 정보로 활용할 수 있다.
  const { id } = await params;
  const { lang = "ko" } = await searchParams;
  return {
    title: `${id} - 게시글(${lang})`,
  };
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>Page - {id}</h1>
    </>
  );
}
