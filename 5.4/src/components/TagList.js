export default function TagList({items}) {
    const List = props => (
        <div className="tag-block">
            {props.children(props.items)}
        </div>
    );
    const ListItem = props => <button className="btn">{props.children}</button>;

    return (
        <List items={items}>
            {items => items.map(
                (item, index) => {
                    return <ListItem key={index}>{item}</ListItem>
                }
            )}
        </List>
    )
}
