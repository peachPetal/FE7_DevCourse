import LoginForm from "./components/LoginForm";
import SignForm from "./components/SignForm";

export default function App() {
  return (
    <div className="relative w-[1152px] h-[700px] bg-[#000000]">
      {/* 왼쪽 로그인 */}
      <LoginForm />

      {/* 오른쪽 회원가입 */}
      <SignForm />
    </div>
  );
}
