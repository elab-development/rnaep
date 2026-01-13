"use client"

import { mockDecks, mockSubjects } from "@/mock/data"
import { FullDeckDto } from "@/shared/types"
import { useState } from "react"
import Card from "./Card"

export default function () {
    const [decks, setDecks] = useState<FullDeckDto[]>(mockDecks)

    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="flex flex-col gap-8 md:flex-row">
                {/* <p>Komponenta DeckBrowser je ovde</p> */}

                {/* Sidebar */}

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