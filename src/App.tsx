import { useState, useEffect, useMemo } from 'react';
import dpsLogo from './assets/DPS.svg';
import SearchBar from './components/SearchBar';
import CityDropdown from './components/CityDropdown';
import HighlightCheckbox from './components/HighlightCheckbox';
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
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [highlightOldest, setHighlightOldest] = useState(false);

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

	const cities = useMemo(() => {
		const citySet = new Set(users.map((user) => user.address.city));
		return Array.from(citySet).sort();
	}, [users]);

	const handleSearch = (term: string) => {
		setSearchTerm(term);
	};

	const handleCityChange = (city: string | null) => {
		setSelectedCity(city);
	};

	const handleHighlightChange = (checked: boolean) => {
		setHighlightOldest(checked);
	};

	const oldestByCity = useMemo(() => {
		const oldest: Record<string, User> = {};
		users.forEach((user) => {
			const city = user.address.city;
			if (
				!oldest[city] ||
				new Date(user.birthDate) < new Date(oldest[city].birthDate)
			) {
				oldest[city] = user;
			}
		});
		return oldest;
	}, [users]);

	const filteredUsers = users.filter((user) => {
		const nameMatch = searchTerm
			? `${user.firstName} ${user.lastName}`
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
			: true;

		const cityMatch = selectedCity
			? user.address.city === selectedCity
			: true;

		return nameMatch && cityMatch;
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
					<CityDropdown
						cities={cities}
						selectedCity={selectedCity}
						onCityChange={handleCityChange}
					/>
					<HighlightCheckbox
						checked={highlightOldest}
						onChange={handleHighlightChange}
					/>
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
								{filteredUsers.map((user) => {
									const isOldest =
										highlightOldest &&
										oldestByCity[user.address.city] &&
										oldestByCity[user.address.city].id ===
											user.id;

									return (
										<tr
											key={user.id}
											className={
												isOldest ? 'highlight' : ''
											}
										>
											<td>{`${user.firstName} ${user.lastName}`}</td>
											<td>{user.address.city}</td>
											<td>
												{new Date(
													user.birthDate
												).toLocaleDateString()}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
