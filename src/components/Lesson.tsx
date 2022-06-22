import { CheckCircle, Lock } from "phosphor-react";

export interface LessonInterface {
    id: string;
    title: string;
    lessonType: 'live' | 'class';
    availableAt: string;
    slug: string;
}

export default function Lesson({ data: lesson }: { data: LessonInterface }) {
    const isAvailable = false
    return (
        <a href="">
            <span className="text-zinc-400">Domingo • 20 de junho • 19h00</span>
            <div className="border rounded border-zinc-600 p-4 mt-2">
                <div className="flex justify-between mb-4">
                    {isAvailable ?
                        (<span className="flex items-center gap-2 text-green-300 text-sm">
                            <CheckCircle size={18} />
                            Conteúdo liberado
                        </span>) :
                        (<span className="flex items-center gap-2 text-orange-300 text-sm">
                            <Lock size={18} />
                            Em breve
                        </span>)}
                    <span className=" text-xs font-semibold border border-green-500 rounded px-1">
                        {lesson.lessonType == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </div>

                <strong>{lesson.title}</strong>
            </div>
        </a>
    )
}