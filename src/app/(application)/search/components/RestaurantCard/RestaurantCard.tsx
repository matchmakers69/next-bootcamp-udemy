import { type Cuisine, type PRICE, type Location } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Price } from "@/ui/components/Price";

interface Restaurant {
	id: number;
	name: string;
	main_image: string;
	price: PRICE;
	cuisine: Cuisine;
	location: Location;
	slug: string;
}

interface RestaurantCardProps {
	restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
	return (
		<div className="ml-4 flex border-b pb-5">
			<Image
				className="h-36 w-44 rounded"
				src={restaurant.main_image}
				alt="card-search"
				width={176}
				height={144}
			/>

			<div className="pl-5">
				<h2 className="text-3xl">{restaurant.name}</h2>
				<div className="flex items-start">
					<div className="mb-2 flex">*****</div>
					<p className="ml-2 text-sm">Awesome</p>
				</div>
				<div className="mb-9">
					<div className="text-reg flex font-light">
						<Price price={restaurant.price} />
						<p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
						<p className="mr-4 capitalize">{restaurant.location.name}</p>
					</div>
				</div>
				<div className="text-red-600">
					<Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
				</div>
			</div>
		</div>
	);
};

export { RestaurantCard };
