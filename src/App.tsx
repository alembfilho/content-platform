import Sidebar from "./components/Sidebar"
import Video from "./components/Video"

function App() {

  return (<>
    <header className="flex w100 items-center justify-center h-[72px] gap-2 bg-zinc-800 border-b-zinc-600 border-b-[1px]">
      <h1 className="text-4xl font-semibold">ignite lab</h1>
      <div className="w-1 h-8 bg-green-400 mt-2"></div>
      <span className="mt-2 tracking-widest text-gray-200 ">REACTJS</span>
    </header>
    <main className="flex">
      <Video />
      <Sidebar />
    </main>

  </>)
}

export default App
