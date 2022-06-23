import { DiscordLogo, Lightning, Image, FileArrowDown, CaretRight } from 'phosphor-react'
import { gql, useQuery } from "@apollo/client"


const GET_LESSON = gql`
    query Lesson($slug: String){
        lesson(where:{slug:$slug}) {
            id
            title
            description
            videoId
            teacher {
                avatarURL
                bio
                name
            }
        }
    }
`
interface GetLessonsResponse {
    lesson: VideoInterface
}

interface VideoInterface {
    id: string;
    title: string;
    description: string;
    videoId: string;
    teacher: {
        avatarURL: string;
        bio: string;
        name: string;
    }
}



export default function Video({ slug }: { slug?: string }) {
    const { data } = useQuery<GetLessonsResponse>(GET_LESSON, { variables: { slug: slug || "ignite-lab-or-aula-1-o-inicio-da-especializacao-em-reactjs" } }
    )
    console.log(data)
    const lesson = data?.lesson
    return (
        <div className="flex-1">
            <iframe className='w-full max-h-[70vh] aspect-video' src={"https://www.youtube.com/embed/" + lesson?.videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <div className="m-8">

                <div className="flex gap-6 flex-col md:flex-row">

                    <div>
                        <h1 className="font-semibold text-2xl mb-4">{lesson?.title}</h1>
                        <p className="text-zinc-200">{lesson?.description}</p>

                        <div className="flex gap-4 items-center mt-6">
                            <img src={lesson?.teacher.avatarURL} alt="avatar"
                                className="w-16 h-16 rounded-full border-green-200 border-2" />

                            <div>
                                <h1 className="font-semibold text-xl">{lesson?.teacher.name}</h1>
                                <span className="text-sm text-zinc-400">{lesson?.teacher.bio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm font-semibold md:min-w-[237px]">
                        <a href='' className="w-full h-[56px] bg-green-900 rounded uppercase mb-4 flex justify-center items-center gap-2
                        hover:bg-green-700 transition-colors">
                            <DiscordLogo size={20} />
                            Comunidade no discord</a>
                        <a href='' className="w-full h-[56px] border-green-200 border rounded uppercase text-green-200 flex justify-center items-center gap-2
                        hover:bg-green-200 hover:text-zinc-700 transition-colors">
                            <Lightning size={20} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center my-20 gap-6">

                    <a href=""
                        className="group flex h-[135px]  bg-zinc-800 rounded items-center hover:bg-zinc-700 transition-colors"
                    >
                        <aside className="bg-green-900 w-24 rounded-l flex justify-center items-center h-full group-hover:bg-green-700 transition-colors">
                            <FileArrowDown size={35} />
                        </aside>
                        <div className="m-6 flex flex-col justify-center">
                            <h1 className="font-semibold text-xl mb-2">Material complementar</h1>
                            <span className="text-sm text-zinc-400">Acesse o material complementar para acelerar o seu desenvolvimento</span>
                        </div>

                        <CaretRight size={30} className="text-green-200 mr-4" />
                    </a>

                    <a href=""
                        className="group flex h-[135px]  bg-zinc-800 rounded items-center
                        hover:bg-zinc-700 transition-colors"
                    >
                        <aside className="bg-green-900 w-24 rounded-l flex justify-center items-center h-full group-hover:bg-green-700 transition-colors">
                            <Image size={35} />
                        </aside>
                        <div className="m-6 flex flex-col justify-center">
                            <h1 className="font-semibold text-xl mb-2">Wallpapers exclusivos</h1>
                            <span className="text-sm text-zinc-400">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</span>
                        </div>

                        <CaretRight size={30} className="text-green-200 mr-4" />
                    </a>

                </div>

                <footer className="border-t-zinc-600 border-t pt-6 text-zinc-400 text-sm flex flex-col text-center gap-2 md:text-left md:flex-row md:justify-between">
                    DROMEL - Todos os direitos reservados
                    <a href="" className="float-right">Políticas de privacidade</a>
                </footer>

            </div>

        </div>
    )
}