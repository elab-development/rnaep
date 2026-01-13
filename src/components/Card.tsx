import { FullDeckDto } from "@/shared/types"
import Image from "next/image"

type Props = {
    deck: FullDeckDto
}

export default function ({ deck }: Props) {

    return (
        <div key={deck.id} className="border border-gray-200">
            <Image
                src={"https://picsum.photos/400/300"}
                alt="Slika kartice"
                width={400}
                height={300}
            />
            <div className="p-4">
                <h3 className="font-semibold">
                    {deck.name}
                </h3>
                <p>
                    {deck.subject.name}
                </p>
            </div>
        </div>
    )
}