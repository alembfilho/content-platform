import Lesson, { LessonInterface } from "./Lesson";
import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { X, List } from "phosphor-react";


const GET_LESSONS = gql`
  query{
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED){
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`
interface GetLessonsResponse {
  lessons: LessonInterface[]
}


export default function Sidebar({ slug }: { slug?: string }) {
  const { data } = useQuery<GetLessonsResponse>(GET_LESSONS)

  const [width, setWidth] = useState<number>(window.innerWidth)
  const [isOpen, toggleMenu] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, []);

  const isMobile = width <= 1024;

  return (<>
    <button
      onClick={() => toggleMenu(old => !old)}
      className="m-6 h-18 fixed right-0 top-0 text-2xl lg:hidden"
    >
      {isOpen ? <X /> : <List />}
    </button>

    <aside className={"absolute lg:relative lg:max-w-[348px] min-w-[100vw] lg:min-w-[310px] min-h-screen flex flex-col flex-1 gap-6 p-6 bg-zinc-800 border-l-zinc-600 lg:border-l"
      + (!isOpen && isMobile ? " hidden" : "")}>
      <h1 className="text-2xl font-semibold pb-6 border-b border-zinc-600">Cronograma das aulas</h1>

      {data?.lessons.map(lesson => (
        <Lesson
          key={lesson.id}
          data={lesson}
        />
      ))}

    </aside>
  </>

  )

}