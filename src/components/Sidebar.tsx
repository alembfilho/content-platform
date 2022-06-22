import Class from "./Class";

export default function Sidebar() {
    return (
        <div className="w-[348px] h-full min-h-screen bg-zinc-800 border-l-zinc-600 border-l-[1px]">
            <h1>Cronograma das aulas</h1>
            <Class />
        </div>
    )
}