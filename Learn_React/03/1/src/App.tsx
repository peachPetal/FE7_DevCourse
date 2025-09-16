import NotFound from "./components/NotFound"

import { twMerge } from 'tailwind-merge'

// CSS Modules -> classNames
// Tailwind CSS -> tailwind-merge
function App() {
  const isBlue = true;
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello World!</h1>
      <NotFound /> */}
      <div className="center">
        <button className="btn-primary">버튼</button>
        <button className={twMerge(`bg-amber-500`, isBlue && `bg-blue-500`)}>버튼</button>
      </div>
    </>
  )
}

export default App
