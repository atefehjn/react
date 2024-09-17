import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}
function Header() {
	return (
		<header className='header'>
			<h1>Fast Pizza Co.</h1>
		</header>
	);
}
function Menu() {
	const pizzas = pizzaData;
	const num_pizzas = pizzas.length;

	return (
		<main className='menu'>
			<h2>Our Menu</h2>
			{num_pizzas > 0 ? ( // if pizzas array is not empty //React.fragment:
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stone oven, all organic, all delicious.
					</p>
					<ul className='pizzas'>
						{pizzas.map((pizza) => (
							<Pizza pizzaObj={pizza} />
						))}
					</ul>
				</>
			) : (
				<h2>we are working on Our Menu, Please come back later :)</h2>
			)}
			;
		</main>
	);
}
function Pizza({ pizzaObj }) {
	// console.log(props);
	return (
		<li className={`pizza ${pizzaObj.soldOut?'sold-out':""}`}>
			<img
				src={pizzaObj.photoName}
				alt={pizzaObj.name}
			/>
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut? 'SOLD OUT':pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	return (
		<foorer className='footer'>
			{isOpen ? (
				<Order
					closeHour={closeHour}
					openHour={openHour}
				/>
			) : (
				<p>
					we are currently closed, please come back tomorrow from {openHour} to{' '}
					{closeHour}!
				</p>
			)}
			{/* {!isOpen && (
				<p>
					we are currently closed, please come back tomorrow from {openHour} to{' '}
					{closeHour}!
				</p>
			)} */}
			{/* {new Date().toLocaleTimeString()}. we are open now! */}
		</foorer>
	);
}

function Order({ closeHour, openHour }) {
	return (
		<div className='order'>
			<p>
				we are open from {openHour}:00 until {closeHour}:00, please come hear
				and see us or order online!
			</p>
			<button className='btn'>Order</button>
		</div>
	);
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
