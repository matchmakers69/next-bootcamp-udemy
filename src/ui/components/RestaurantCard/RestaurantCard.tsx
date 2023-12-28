import Image from "next/image";
import Link from "next/link";
import { Price } from "../Price";
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
						<div className="mb-2 flex">*****</div>
						<p className="ml-2">77 reviews</p>
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
