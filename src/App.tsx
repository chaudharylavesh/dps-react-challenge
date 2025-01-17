import dpsLogo from './assets/DPS.svg';
import './App.css';

function App(): JSX.Element {
	return (
		<div className="container">
			<div className="header">
				<a href="https://www.digitalproductschool.io/" target="_blank" rel="noopener noreferrer">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="main-content">
				{/* Search and filter section will go here */}
				<div className="filters">
				</div>

				{/* User table will go here */}
				<div className="table-container">
				</div>
			</div>
		</div>
	);
}

export default App;