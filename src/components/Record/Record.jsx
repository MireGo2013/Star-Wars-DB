export default ({ itemDetails, fild, label }) => {
  return (
    <li key={itemDetails.name} className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemDetails[fild]}</span>
    </li>
  );
};
