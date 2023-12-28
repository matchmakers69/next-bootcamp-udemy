interface RestaurantDescriptionProps {
	description: string;
}

function RestaurantDescription({ description }: RestaurantDescriptionProps) {
	return (
		<div className="mt-4">
			<p className="text-lg font-light">{description}</p>
		</div>
	);
}

export { RestaurantDescription };
