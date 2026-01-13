import Link from "next/link"

type Props = {
    search: string;
    setSearch: (value: string) => void;
}

export default function Sidebar({ search, setSearch }: Props) {
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