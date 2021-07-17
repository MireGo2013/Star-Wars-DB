import "./item-list.css";

let ItemList = (props) => {
  const data = props.data;
  const items = data.map((item) => {
    const { id } = item;
    const label = props.children(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => props.onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};



export default ItemList
