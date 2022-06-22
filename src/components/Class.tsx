import { CheckCircle } from "phosphor-react";

export default function Class() {
    return (
        <div>
            <span className="text-zinc-400">Domingo • 20 de junho • 19h00</span>
            <div className="border rounded border-zinc-600 p-4 mt-2">
                <div className="flex justify-between mb-4">
                    <span className="flex items-center gap-2 text-green-300 text-sm">
                        <CheckCircle size={18} />
                        Conteúdo liberado
                    </span>
                    <span className="text-green-500 text-xs font-semibold border border-green-500 rounded px-1">AO VIVO</span>
                </div>

                <strong>Abertura do evento Ignite labs</strong>
            </div>
        </div>
    )
}