import Class from "./Class";

export default function Sidebar() {
    return (
        <aside className="w-[348px] min-h-screen flex flex-col gap-6 p-6 bg-zinc-800 border-l-zinc-600 border-l">
            <h1 className="text-2xl font-semibold pb-6 border-b border-zinc-600">Cronograma das aulas</h1>

            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
            <Class />
        </aside>
    )
}