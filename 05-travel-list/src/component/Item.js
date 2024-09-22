export default function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li>
			<input
				type='checkbox'
				checked={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button
				style={{ color: 'red', fontSize: '40px' }}
				onClick={() => onDeleteItem(item.id)}>
				&times;
			</button>
		</li>
	);
}
