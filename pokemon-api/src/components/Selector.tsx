export default function Selector(props: { 
    children: any,
    onSelectorChange: (e: any) => void
}) {
    const {children, onSelectorChange} = props
    return (
        <select className="selector" onChange={onSelectorChange}>
            <option value="">--Please choose the pokemon--</option>
            {children}
        </select>
    )
}