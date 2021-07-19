const Record = ({ itemDetails, fild, label}) => {
  return (
    <li  className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemDetails[fild]}</span>
    </li>
  );
};

export default Record;
