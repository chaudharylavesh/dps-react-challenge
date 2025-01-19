import './styles.css';

interface HighlightCheckboxProps {
	checked: boolean; // Current checkbox state
	onChange: (checked: boolean) => void; // Handler for state changes
}

const HighlightCheckbox = ({ checked, onChange }: HighlightCheckboxProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked);
	};

	return (
		<div className="checkbox-container">
			<label className="checkbox-label">
				<input
					type="checkbox"
					checked={checked}
					onChange={handleChange}
					className="checkbox-input"
				/>
				<span className="checkbox-text">Highlight oldest per city</span>
			</label>
		</div>
	);
};

export default HighlightCheckbox;
