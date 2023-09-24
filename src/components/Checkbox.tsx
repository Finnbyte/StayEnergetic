interface IProps {
    label: string
    isChecked: boolean
    onChange: (e: unknown) => void
}

export default function Checkbox({ label, isChecked, onChange }: IProps) {
    return (
        <span onClick={onChange} className={`${isChecked ? "bg-slate-700" : "bg-slate-900"} cursor-pointer p-2 ${isChecked ? "border-2 rounded-md border-slate-700" : ""} text-white w-full text-center`}>
            <button>
                {label}
            </button>
        </span>
    )
}
