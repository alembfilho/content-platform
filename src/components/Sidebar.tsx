import Lesson, { LessonInterface } from "./Lesson";
import { gql, useQuery } from "@apollo/client"


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
  return (
    <aside className="w-[348px] min-h-screen flex flex-col gap-6 p-6 bg-zinc-800 border-l-zinc-600 border-l">
      <h1 className="text-2xl font-semibold pb-6 border-b border-zinc-600">Cronograma das aulas</h1>

      {data?.lessons.map(lesson => (
        <Lesson
          key={lesson.id}
          data={lesson}
        />
      ))}

    </aside>
  )
}