export default function Stat({ items }) {
	if (!items.length) {
		return <em className='stats'>Add your list</em>;
	}

	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);

	return (
		<div className='stats'>
			{percentage === 100
				? 'You are ready to go now!'
				: `You need ${numItems} items, you have ${numPacked} packed. (${percentage}%)`}
		</div>
	);
}
