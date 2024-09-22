import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stat from './Stat';

const initialItems = [
	{ id: 1, description: 'passport', quantity: 2, packed: false },
	{ id: 2, description: 'socks', quantity: 12, packed: false },
	{ id: 3, description: 'socks', quantity: 12, packed: false },
	{ id: 4, description: 'socks', quantity: 12, packed: true },
	{ id: 5, description: 'socks', quantity: 12, packed: false },
];

export default function App() {
	const [items, setItems] = useState(initialItems);

	function handleAddItem(item) {
		setItems((items) => [...items, item]);
	}
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		if (items.length !== 0) {
			const confirmed = window.confirm(
				'Are you sure you want to delete all items?'
			);
			if (confirmed) setItems([]);
		}
	}

	return (
		<div className='app'>
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stat items={items} />
		</div>
	);
}
