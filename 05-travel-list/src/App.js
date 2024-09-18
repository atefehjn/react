import { useState } from 'react';

const initialItems = [
	{ id: 1, description: 'passport', quantity: 2, packed: false },
	{ id: 2, description: 'socks', quantity: 12, packed: false },
	{ id: 3, description: 'socks', quantity: 12, packed: false },
	{ id: 4, description: 'socks', quantity: 12, packed: true },
	{ id: 5, description: 'socks', quantity: 12, packed: false },
];

export default function App() {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stat />
		</div>
	);
}

function Logo() {
	return (
		<div>
			<h1>🌴 Far Away 👜</h1>
		</div>
	);
}

function Form() {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState();
	function handleSubmit(e) {
		e.preventDefault();
		if (!description) return;
		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};
		console.log(newItem);
	}
	return (
		<form
			className='add-form'
			onSubmit={handleSubmit}>
			<h2>Choose your items that you need!</h2>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option
						value={num}
						key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type='text'
				placeholder='item'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList() {
	return (
		<div className='list'>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				{initialItems.map((item) => (
					<Item
						key={item.id}
						item={item}
					/>
				))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button style={{ color: 'red', fontSize: '40px' }}>&times;</button>
		</li>
	);
}

function Stat() {
	return (
		<div className='stats'>
			<p>
				You need {initialItems.length} items, you have 0/{initialItems.length}{' '}
				items already.
			</p>
		</div>
	);
}
