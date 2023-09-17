interface selectorProps { 
    children: any,
    onSelectorChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Selector(props: selectorProps) {
    const {children, onSelectorChange} = props
    return (
        <select className="selector" onChange={onSelectorChange}>
            <option value="">--Please choose the pokemon--</option>
            {children}
        </select>
    )
}