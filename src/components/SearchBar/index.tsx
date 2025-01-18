import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import './styles.css';

interface SearchBarProps {
	onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
	const [searchTerm, setSearchTerm] = useState('');

	const debouncedSearch = useCallback(
		debounce((value: string) => {
			onSearch(value);
		}, 1000),
		[onSearch]
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchTerm(value);
		debouncedSearch(value);
	};

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder="Search by name..."
				value={searchTerm}
				onChange={handleChange}
				className="search-input"
			/>
		</div>
	);
};

export default SearchBar;
