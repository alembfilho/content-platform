export default function Video() {
    return (
        <div className="flex-1">
            <video src="" className="w-full h-[617px] bg-red-500"></video>
            <div className="m-8">

                <div className="flex">

                    <div>
                        <h1 className="font-semibold text-2xl mb-4">Aula 01 - Criando o projeto e realizando o setup inicial</h1>
                        <p className="text-zinc-200">Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>

                        <div className="flex gap-4 align-middle mt-6">
                            <img src="https://github.com/alembfilho.png" alt="avatar"
                                className="w-16 h-16 rounded-full border-green-200 border-2" />

                            <div>
                                <h1 className="font-semibold text-xl">Alessandro Melgaço</h1>
                                <span className="text-sm text-zinc-400">Fullstack developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm font-semibold">
                        <button className="w-[237px] h-[56px] bg-green-900 rounded uppercase mb-4">Comunidade no discord</button>
                        <button className="w-[237px] h-[56px] border-green-200 border-[1px] rounded uppercase text-green-200">Acesse o desafio</button>
                    </div>
                </div>

                <div className="flex align-middle my-20">
                    <a href=""
                        className="flex h-[135px]  bg-zinc-800 rounded"
                    >
                        <aside className="bg-green-900 w-20 rounded-l"></aside>
                        <div className="m-6">
                            <h1 className="font-semibold text-xl">Material complementar</h1>
                            <span className="text-sm text-zinc-400">Acesse o material complementar para acelerar o seu desenvolvimento</span>
                        </div>
                    </a>
                </div>

                <footer className="border-t-zinc-600 border-t-[1px] pt-6 text-zinc-400 text-sm">
                    Rocketseat
                    - Todos os direitos reservados
                    <a href="" className="float-right">Políticas de privacidade</a>
                </footer>

            </div>

        </div>
    )
}