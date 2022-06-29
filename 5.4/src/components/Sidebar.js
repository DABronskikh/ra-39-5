
export default function Sidebar({id, children}) {

    return (
        <aside id={id} style={{width: '280px'}}>
            {children}
        </aside>
    )

}
