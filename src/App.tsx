import { gql, useQuery } from "@apollo/client"
import Sidebar from "./components/sidebar"
import Video from "./components/Video"

// const GET_LESSONS = gql`
//   query{
//     lessons{
//       id
//       title
//     }
//   }
// `
// interface Lesson {
//   id: string;
//   title: string;
// }

// const { data } = useQuery(GET_LESSONS)
// console.log(data)

function App() {


  return (<>
    <header className="flex w100 items-center justify-center h-[72px] gap-2 border-b-gray-600 border-b-[1px]">
      <h1 className="text-4xl font-semibold">ignite lab</h1>
      <div className="w-1 h-8 bg-green-400 mt-2"></div>
      <span className="mt-2 tracking-widest text-gray-200 ">REACTJS</span>
    </header>
    <Video />
    <Sidebar />

  </>)
}

export default App
