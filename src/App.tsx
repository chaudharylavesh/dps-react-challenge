import { useState, useEffect } from 'react';
import dpsLogo from './assets/DPS.svg';
import SearchBar from './components/SearchBar';
import './App.css';

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
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState('');

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

	const handleSearch = (term: string) => {
		setSearchTerm(term);
	};

	const filteredUsers = users.filter((user) => {
		if (!searchTerm) return true;

		const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
		return fullName.includes(searchTerm.toLowerCase());
	});

	return (
		<div className="container">
			<div className="header">
				<a
					href="https://www.digitalproductschool.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="main-content">
				<div className="filters">
					<SearchBar onSearch={handleSearch} />
				</div>

				<div className="table-container">
					{loading ? (
						<p className="status-message">Loading...</p>
					) : error ? (
						<p className="status-message error">{error}</p>
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
								{filteredUsers.map((user) => (
									<tr key={user.id}>
										<td>{`${user.firstName} ${user.lastName}`}</td>
										<td>{user.address.city}</td>
										<td>
											{new Date(
												user.birthDate
											).toLocaleDateString()}
										</td>
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
