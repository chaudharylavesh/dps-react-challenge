import { useState, useEffect } from 'react';
import dpsLogo from './assets/DPS.svg';
import './App.css';

// Define our User interface based on the API response
interface User {
	id: number;
	firstName: string;
	lastName: string;
	address: {
		city: string;
	};
	birthDate: string;
}

function App(): JSX.Element {
	// State for users and loading
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Fetch users when component mounts
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://dummyjson.com/users');
				const data = await response.json();
				setUsers(data.users);
				setLoading(false);
			} catch (err) {
				setError('Failed to fetch users');
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className="container">
			<div className="header">
				<a href="https://www.digitalproductschool.io/" target="_blank" rel="noopener noreferrer">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="main-content">
				<div className="filters">
					{/* Filters will go here */}
				</div>

				<div className="table-container">
					{loading ? (
						<p>Loading...</p>
					) : error ? (
						<p>Error: {error}</p>
					) : (
						<table className="user-table">
							<thead>
								<tr>
									<th>Name</th>
									<th>City</th>
									<th>Birthday</th>
								</tr>
							</thead>
							<tbody>
								{users.map(user => (
									<tr key={user.id}>
										<td>{`${user.firstName} ${user.lastName}`}</td>
										<td>{user.address.city}</td>
										<td>{new Date(user.birthDate).toLocaleDateString()}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;