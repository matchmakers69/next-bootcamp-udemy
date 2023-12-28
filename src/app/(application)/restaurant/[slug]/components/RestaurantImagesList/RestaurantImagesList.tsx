import Image from "next/image";

interface RestaurantImagesListProps {
	images: string[];
}

function RestaurantImagesList({ images }: RestaurantImagesListProps) {
	return (
		<div>
			<h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
				{images.length > 0 ? images.length : 0} photo{images.length > 1 ? "s" : ""}
			</h1>
			<div className="flex flex-wrap">
				{images.map((image, index) => (
					<Image
						key={index + 1}
						className="mb-1 mr-1 h-44 w-56"
						src={image}
						alt={`restaurant-card-image-${index + 1}`}
						width={224}
						height={176}
					/>
				))}
			</div>
		</div>
	);
}

export { RestaurantImagesList };
