import { useState } from "react";

export default function UseState() {
  // ----------------------------
  // 1) 일반 숫자 데이터
  // ----------------------------
  const [count, setCount] = useState(0);

  const changeCountHandler = () => {setCount((prev) => prev + 1);};

  // ----------------------------
  // 2) 객체 데이터
  // ----------------------------
  const [setting, setSetting] = useState({
    theme: "dark",
  });

  const changeSettingHandler = () => {setSetting((prev) => ({
    ...prev,
    theme: prev.theme === "dark" ? "light" : "dark",
  }));}

  // ----------------------------
  // 3) 배열 데이터
  // ----------------------------
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" },
  ]);

  const addUserHandler = () => {setUsers((prev) => [
    ...prev,
    { id: Date.now(), name: `NewUser${prev.length + 1}` },
  ]);}

  const deleteUserHandler = () => {
    setUsers((prev) => prev.slice(0, prev.length - 1));
  };

  const changeUserHandler = () => {setUsers((prev) => prev.map((user) =>
    user.id === 1 ? { ...user, name: "UpdatedName" } : user
  ));}

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">
          useState 예제 & 상태 업데이트 패턴
        </h1>

        {/* Count 카드 */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">1. 숫자 상태 관리</h2>
            <span className="text-xs rounded-full bg-slate-800 px-2 py-1 text-slate-300">
              primitive state
            </span>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            이전 값에 의존하는 경우{" "}
            <code className="px-1 py-0.5 rounded bg-slate-800 text-xs">
              setState(prev =&gt; ...)
            </code>{" "}
            패턴을 사용합니다.
          </p>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">현재 카운트</p>
              <p className="text-3xl font-bold mt-1">{count}</p>
            </div>
            <button
              onClick={changeCountHandler}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-400 active:scale-[0.98] transition"
            >
              숫자 +1 증가
            </button>
          </div>
        </section>

        {/* Setting 카드 */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">2. 객체 상태 관리</h2>
            <span className="text-xs rounded-full bg-slate-800 px-2 py-1 text-slate-300">
              object state
            </span>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            객체는{" "}
            <code className="px-1 py-0.5 rounded bg-slate-800 text-xs">
              ...prev
            </code>{" "}
            로 불변성을 유지하면서 업데이트해야 합니다.
          </p>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">현재 테마</p>
              <p className="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    setting.theme === "dark" ? "bg-indigo-400" : "bg-yellow-300"
                  }`}
                />
                {setting.theme === "dark" ? "Dark Mode" : "Light Mode"}
              </p>
            </div>
            <button
              onClick={changeSettingHandler}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-indigo-950 hover:bg-indigo-400 active:scale-[0.98] transition"
            >
              테마 토글하기
            </button>
          </div>
        </section>

        {/* Users 카드 */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">3. 배열 상태 관리</h2>
            <span className="text-xs rounded-full bg-slate-800 px-2 py-1 text-slate-300">
              array state
            </span>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            배열은{" "}
            <code className="px-1 py-0.5 rounded bg-slate-800 text-xs">
              map / filter / slice / concat
            </code>{" "}
            으로 새로운 배열을 만들어서 업데이트합니다.
          </p>

          <ul className="mb-4 space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm"
              >
                <span>{user.name}</span>
                <span className="text-xs text-slate-500">id: {user.id}</span>
              </li>
            ))}
            {users.length === 0 && (
              <li className="text-sm text-slate-500">
                현재 등록된 유저가 없습니다.
              </li>
            )}
          </ul>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={addUserHandler}
              className="rounded-xl bg-emerald-500 px-3 py-2 text-xs font-medium text-emerald-950 hover:bg-emerald-400 active:scale-[0.98] transition"
            >
              유저 추가하기
            </button>
            <button
              onClick={deleteUserHandler}
              className="rounded-xl bg-rose-500 px-3 py-2 text-xs font-medium text-rose-950 hover:bg-rose-400 active:scale-[0.98] transition disabled:opacity-40"
              disabled={users.length === 0}
            >
              마지막 유저 삭제하기
            </button>
            <button
              onClick={changeUserHandler}
              className="rounded-xl bg-amber-500 px-3 py-2 text-xs font-medium text-amber-950 hover:bg-amber-400 active:scale-[0.98] transition"
            >
              id=1 유저 이름 변경
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
