
export default function SocialList({items}) {
    const List = props => (
        <ul className="nav flex-column social-block">
            {props.children(props.items)}
            <li>Всего: {props.items.length}</li>
        </ul>
    );
    const ListItem = props =>
        <li><a className="nav-link" href="#">{props.children}</a></li>;

    return (
        <List items={items}>
            {items => items.map((item, index) => {
                    return <ListItem key={index}>{item}</ListItem>
                }
            )}
        </List>
    )

}
