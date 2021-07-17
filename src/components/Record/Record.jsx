export default ({item, fild, label}) => {
	return (
		<li className="list-group-item">
		<span className="term">{label}</span>
		<span>{fild}</span>
	  </li>
	)
}