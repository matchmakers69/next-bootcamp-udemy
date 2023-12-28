interface RestaurantTitleProps {
	name: string;
}

function RestaurantTitle({ name }: RestaurantTitleProps) {
	return (
		<div className="mt-4 border-b pb-6">
			<h2 className="text-4xl font-bold">{name}</h2>
		</div>
	);
}

export { RestaurantTitle };
