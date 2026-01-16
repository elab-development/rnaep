import Link from "next/link"
import FilterBtn from "./FilterBtn"
import { FullSubjectDto } from "@/shared/types";

type Props = {
    search: string;
    setSearch: (value: string) => void;
    subjects: FullSubjectDto[];
    setSubjectId: (value: number | null) => void;
}

export default function Sidebar({ search, setSearch, subjects, setSubjectId }: Props) {
    return (
        <aside className="w-full md:w-64 shrink-0">
            <div className="flex flex-col gap-4 md:sticky md:top-20">
                {/* Search */}
                <input
                    placeholder="Pretraga špilova…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded border border-gray-200 px-3 py-2"
                />
                {/* Subject filter buttons */}
                <div className="flex flex-wrap gap-2 md:flex-col">
                    <FilterBtn subjectName={"Svi predmeti"} handleClick={() => setSubjectId(null)} />
                    {subjects.map((s) =>
                        <FilterBtn subjectName={s.name} key={s.id} handleClick={() => setSubjectId(s.id)} />
                    )}

                </div>
                {/* Dugme koje vodi na create deck stranicu*/}
                <Link
                    href="/deck-create"
                    className="inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                    + Napravi špil
                </Link>
            </div>
        </aside>
    )
}