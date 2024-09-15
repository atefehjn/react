/*const data = [
	{
		id: 1,
		title: 'The Lord of the Rings',
		publicationDate: '1954-07-29',
		author: 'J. R. R. Tolkien',
		genres: [
			'fantasy',
			'high-fantasy',
			'adventure',
			'fiction',
			'novels',
			'literature',
		],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: 'El señor de los anillos',
			chinese: '魔戒',
			french: 'Le Seigneur des anneaux',
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: 'The Cyberiad',
		publicationDate: '1965-01-01',
		author: 'Stanislaw Lem',
		genres: [
			'science fiction',
			'humor',
			'speculative fiction',
			'short stories',
			'fantasy',
		],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: 'Dune',
		publicationDate: '1965-01-01',
		author: 'Frank Herbert',
		genres: ['science fiction', 'novel', 'adventure'],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: '',
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: '1997-06-26',
		author: 'J. K. Rowling',
		genres: ['fantasy', 'adventure'],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: 'Harry Potter y la piedra filosofal',
			korean: '해리 포터와 마법사의 돌',
			bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
			portuguese: 'Harry Potter e a Pedra Filosofal',
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: 'A Game of Thrones',
		publicationDate: '1996-08-01',
		author: 'George R. R. Martin',
		genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: '왕좌의 게임',
			polish: 'Gra o tron',
			portuguese: 'A Guerra dos Tronos',
			spanish: 'Juego de tronos',
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
];

function getBooks() {
	return data;
}

function getBook(id) {
	return data.find((d) => d.id === id);
}

// Distructuring
const book = getBook(3);
const tilte1 = book.title;
const author1 = book.author;

//other way: use const with namr of each key in your array:
const { title, author, genres } = book;

genres;
// you can find values in order in array like that:
const [first_genre, second, third] = genres;
third;
//rest and spread oprator:
//The rest and spread operators (...) are useful features in JavaScript introduced in ES6.
//Although both use the same syntax (...), their purposes differ based on how and where they are used.
function sum(...numbers) {
	return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
const [f, s, ...rest] = genres;
rest;
const newGenres = [...genres, 'epic fantasy'];
newGenres;
const updateBook = {
	...book,
	newFeature: 1,
	// update a property
	pages: 1001,
};

// updateBook;

//arrow function:
// typical define of a function:
function getYear(str) {
	return str.split('-')[0];
}

const year = getYear(book.publicationDate);
year;

const getYearArrow = (str) => str.split('-')[0];
console.log(getYearArrow(book.publicationDate));

//ternary instead of is statement:
if (book.pages > 1000) {
	console.log('over than 1000');
} else {
	console.log('less than 1000');
}
//try this:
pageRange = book.pages > 1000 ? 'over than 1000' : 'less than 1000';
console.log(`the ${book.title} has ${pageRange} pages`);
//short circuiting and logical oprators like &&, || and ??

//falsy values: 0,'',undefined,null
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || 'no data';
// countWrong;
// it is wrong because it has count but is zero
//for solving this problem make another operator named nullish coalescing with symbol ??
// const count = book.reviews.librarything.reviewsCount ?? 'no data';
// count;

//optional chaining
//when we are not sure a property is defined or not, we can use optional operand:
//for example we write a function that calculate all review counts for each book:
//for book 3 we dont have reviewCount for librarything and we get this error:
// Cannot read properties of undefined (reading 'reviewsCount)
//for solving we use optional chaining operand, this check if a propertiy does exist, then check the value of it, and if it not exist, it ignore it
//the oprand is ? after each property
function totalReviewCount(book) {
	const goodreadCount = book.reviews?.goodreads?.reviewsCount;
	const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0;
	return goodreadCount + librarythingCount;
}
console.log(totalReviewCount(book));

// Array map method
books = getBooks();

//map method little example
const a = [1, 2, 3, 4, 5];
const mapped_a = a.map((el) => el * 2);
mapped_a;
const titles = books.map((book) => book.title);
titles;

const essential_data = books.map((book) => ({
	title: book.title,
	author: book.author,
}));
essential_data;

//filter method on Array:

const longBookWithMovie = books
	.filter((book) => book.pages > 500)
	.filter((book) => book.hasMovieAdaptation)
	.map((book) => ({
		title: book.title,
		author: book.author,
		genre: book.genres,
	}));
longBookWithMovie;

//reduse method
//actully is sum of pages
const AllBooksPages = books.reduce((acc, book) => acc + book.pages, 0);
AllBooksPages;

//sort method, it is a functional method and when use sort method, change main array's elements also:
// a - b :Ascending
// b - a :Descending
const arr = [4, 1, 6, 3, 8, 4, 9];
// const sorted_arr = arr.sort((a, b) => b - a);
// sorted_arr;
// arr;
// as you see, arr also changed, for preventing this we copy array and then use sort method:
const sorted_arr2 = arr.slice().sort((a, b) => a - b);
sorted_arr2;
arr;

//Add a book to books:
const newBook = {
	id: 6,
	title: 'Harry Potter and the Prisoner of Azkaban',
	author: 'J. K. Rowlling',
};
const bookAfterAdd = [...books, newBook];
bookAfterAdd;

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;
//change number of pages for book.id ===1
const bookAfterUpdate = bookAfterDelete.map(book=> book.id===1? {...book, pages:110}: book);
bookAfterUpdate;
*/

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

// console.log('atefe');

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const data = await res.json();
	console.log(data);
}
getData()
console.log('atefe');