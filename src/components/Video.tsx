import { DiscordLogo, Lightning, Image, FileArrowDown, CaretRight } from 'phosphor-react'

export default function Video() {
    return (
        <div className="flex-1">
            <iframe width="1019" height="573" src="https://www.youtube.com/embed/cUT665tW4v8" title="Ignite Lab | Aula 2 •  Estrutura visual do projeto" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="m-8">

                <div className="flex">

                    <div>
                        <h1 className="font-semibold text-2xl mb-4">Aula 01 - Criando o projeto e realizando o setup inicial</h1>
                        <p className="text-zinc-200">Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>

                        <div className="flex gap-4 items-center mt-6">
                            <img src="https://github.com/alembfilho.png" alt="avatar"
                                className="w-16 h-16 rounded-full border-green-200 border-2" />

                            <div>
                                <h1 className="font-semibold text-xl">Alessandro Melgaço</h1>
                                <span className="text-sm text-zinc-400">Fullstack developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm font-semibold">
                        <button className="w-[237px] h-[56px] bg-green-900 rounded uppercase mb-4 flex justify-center items-center gap-2">
                            <DiscordLogo size={20} />
                            Comunidade no discord</button>
                        <button className="w-[237px] h-[56px] border-green-200 border rounded uppercase text-green-200 flex justify-center items-center gap-2">
                            <Lightning size={20} />
                            Acesse o desafio
                        </button>
                    </div>
                </div>

                <div className="flex items-center my-20 gap-6">

                    <a href=""
                        className="flex h-[135px]  bg-zinc-800 rounded items-center"
                    >
                        <aside className="bg-green-900 w-24 rounded-l flex justify-center items-center h-full">
                            <FileArrowDown size={35} />
                        </aside>
                        <div className="m-6 flex flex-col justify-center">
                            <h1 className="font-semibold text-xl mb-2">Material complementar</h1>
                            <span className="text-sm text-zinc-400">Acesse o material complementar para acelerar o seu desenvolvimento</span>
                        </div>

                        <CaretRight size={30} className="text-green-200 mr-4" />
                    </a>

                    <a href=""
                        className="flex h-[135px]  bg-zinc-800 rounded items-center"
                    >
                        <aside className="bg-green-900 w-24 rounded-l flex justify-center items-center h-full">
                            <Image size={35} />
                        </aside>
                        <div className="m-6 flex flex-col justify-center">
                            <h1 className="font-semibold text-xl mb-2">Wallpapers exclusivos</h1>
                            <span className="text-sm text-zinc-400">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</span>
                        </div>

                        <CaretRight size={30} className="text-green-200 mr-4" />
                    </a>

                </div>

                <footer className="border-t-zinc-600 border-t pt-6 text-zinc-400 text-sm">
                    Rocketseat
                    - Todos os direitos reservados
                    <a href="" className="float-right">Políticas de privacidade</a>
                </footer>

            </div>

        </div>
    )
}