import Image from "next/image";
import Link from "next/link";
import { Price } from "../Price";
import { Stars } from "../Stars";
import { type RestaurantSubset } from "@/api/services/interfaces";

interface RestaurantCardProps {
	restaurant: RestaurantSubset;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
	return (
		<div className="m-3 h-72 w-64 cursor-pointer overflow-hidden rounded border">
			<Link href={`/restaurant/${restaurant.slug}`}>
				<Image
					className="h-36 w-full"
					src={restaurant.main_image}
					alt="card-1"
					width={0}
					height={0}
					sizes="100vw"
				/>

				<div className="p-1">
					<h3 className="mb-2 text-2xl font-bold">{restaurant.name}</h3>
					<div className="flex items-start">
						<Stars reviews={restaurant.reviews} />
						<p className="ml-2">
							{restaurant.reviews.length >= 1 ? (
								`${restaurant.reviews.length} review${restaurant.reviews.length > 1 ? "s" : ""}`
							) : (
								<span>Sorry there are no reviews</span>
							)}
						</p>
					</div>
					<div className="text-reg flex font-light capitalize">
						<p className=" mr-3">{restaurant.cuisine.name}</p>
						<Price price={restaurant.price} />
						<p>{restaurant.location.name}</p>
					</div>
					<p className="mt-1 text-sm font-bold">Booked 3 times today</p>
				</div>
			</Link>
		</div>
	);
};

export { RestaurantCard };
