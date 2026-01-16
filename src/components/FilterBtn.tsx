
type Props = {
    subjectName: string;
    handleClick: () => void
}

export default function FilterBtn({ subjectName, handleClick }: Props) {
    return (
        <button
            className="rounded border p-2 transition"
            onClick={handleClick} >
            {subjectName}
        </button>
    )
}