interface RestaurantHeaderProps {
	name: string;
}

const RestaurantHeader = ({ name }: RestaurantHeaderProps) => {
	const renderTitle = () => {
		// Splitting by Hyphen: The split method is used to divide the name prop into an array of parts based on the hyphen ("-"). For example, "adrak-yorkville-toronto" becomes ["adrak", "yorkville", "toronto"].
		const parts = name.split("-");
		const formatName = parts.map((part, index) => {
			// If it's the last part, add parentheses around it
			if (index === parts.length - 1) {
				return `(${part})`;
			}
			// If it's not the last part, leave it as is
			return part;
		});
		// Step 3: Join the formatted parts into a string with spaces
		return formatName.join(" ");
	};
	return (
		<div className="h-96 overflow-hidden">
			<div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
				<h1 className="text-shadow text-center text-7xl capitalize text-white">{renderTitle()}</h1>
			</div>
		</div>
	);
};

export { RestaurantHeader };
