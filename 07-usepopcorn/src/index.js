import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRate,setMovieRate]=useState(0)
	return (
		<>
			<StarRating
				defaultRating='3'
				color='blue'
        onSetRate={setMovieRate}
			/>
      <p>this movie has {movieRate} stars</p>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating
    maxRating='sss'
			color='red'
			size='24'
			message={['bad', 'not bad', 'fine', 'good', 'Amazing']}
		/>
   
		<StarRating
			size='36'
			className='test'
			defaultRating='2'
		/>
		<Test />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
