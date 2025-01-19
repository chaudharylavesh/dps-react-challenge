import './styles.css';

interface CityDropdownProps {
	cities: string[]; // List of available cities
	selectedCity: string | null; // Currently selected city
	onCityChange: (city: string | null) => void; // Handler for city selection
}

const CityDropdown = ({
	cities,
	selectedCity,
	onCityChange,
}: CityDropdownProps) => {
	// Handle city selection changes
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		onCityChange(value || null); // Convert empty string to null
	};

	return (
		<div className="dropdown-container">
			<select
				value={selectedCity || ''}
				onChange={handleChange}
				className="city-select"
			>
				<option key="select-city" value="">
					Select city
				</option>
				{cities.map((city) => (
					<option key={city} value={city}>
						{city}
					</option>
				))}
			</select>
		</div>
	);
};

export default CityDropdown;
