import { useState } from 'react';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

export default function App() {
	// let step =2; Don't use let and then Update it manually (step=step+1), because react can not recognize update

	const [step, setStep] = useState(1);
	// const [test, setTest] = useState({ name: 'Atefe' });

	const [isOpen, setIsOpen] = useState(true);
	function handlePrevious() {
		if (step > 1) setStep((s) => s - 1);
		console.log(step);
	}

	function handleNext() {
		if (step < 3) setStep((s) => s + 1);
		// Bad practice: because in complex app do not work correctly
		// test.name = 'changed without setFunction';
		//good way:
		// setTest({ name: 'good way' });
		console.log(step);
	}
	return (
		<>
			<button
				className='close'
				onClick={() => setIsOpen((is) => !is)}>
				{' '}
				&times;
			</button>
			{isOpen && (
				<div className='steps'>
					<div className='numbers'>
						<div className={`${step >= 1 ? 'active' : ''}`}>1</div>
						<div className={`${step >= 2 ? 'active' : ''}`}>2</div>
						<div className={`${step >= 3 ? 'active' : ''}`}>3</div>
					</div>
					<p className='message'>
						Step {step}: {messages[step - 1]}{' '}
					</p>{' '}
					{/*{test.name}*/}
					<div className='buttons'>
						<button
							style={{ backgroundColor: '#7952f2', color: '#fff' }}
							onClick={handlePrevious}>
							Previous
						</button>
						<button
							style={{ backgroundColor: '#7952f2', color: '#fff' }}
							onClick={handleNext}>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}
