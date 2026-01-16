"use client"

import { mockDecks, mockSubjects } from "@/mock/data"
import { FullDeckDto } from "@/shared/types"
import { useEffect, useState } from "react"
import Card from "./Card"
import Sidebar from "./Sidebar"


export default function () {
    const [decks, setDecks] = useState<FullDeckDto[]>(mockDecks)
    const [search, setSearch] = useState("");
    const [subjectId, setSubjectId] = useState<number | null>(null);

    useEffect(() => {
        // console.log(search)
        let data = mockDecks;
        if (search.trim()) {
            data = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (subjectId) {
            data = data.filter((d) => d.subject.id === subjectId)
            //setSubjectId(null)
        }
        setDecks(data)
    }, [search, subjectId])

    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="flex flex-col gap-8 md:flex-row">
                {/* <p>Komponenta DeckBrowser je ovde</p> */}

                {/* Sidebar */}
                <Sidebar search={search} setSearch={setSearch} subjects={mockSubjects} setSubjectId={setSubjectId} />

                {/* Cards */}
                <section className="flex-1">
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {decks.map((d) => (
                            <Card deck={d} key={d.id} />
                        ))}

                    </div>
                </section>
            </div>
        </div>
    )
}