// src/components/CityDropdown/index.tsx
import './styles.css';

interface CityDropdownProps {
	cities: string[];
	selectedCity: string | null;
	onCityChange: (city: string | null) => void;
}

const CityDropdown = ({
	cities,
	selectedCity,
	onCityChange,
}: CityDropdownProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		onCityChange(value || null);
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
