import { type Metadata } from "next";
import { RestaurantNavbar } from "./components/RestaurantNavbar";
import { RestaurantTitle } from "./components/RestaurantTitle";
import { RestaurantRating } from "./components/RestaurantRating";
import { RestaurantDescription } from "./components/RestaurantDescription";
import { RestaurantImagesList } from "./components/RestaurantImagesList";
import { RestaurantReviews } from "./components/RestaurantReviews/RestaurantReviews";
import { RestaurantReservationCard } from "./components/RestaurantReservationCard";
import getRestaurantDetails from "@/app/actions/getRestaurantDetails";

export const metadata: Metadata = {
	title: {
		default: "Milestones Grill (Toronto) | OpenTable ",
		template: `%s - Software Engineer`,
	},
	description: "This is search",
};

const RestaurantDetails = async (props: { params: { slug: string } }) => {
	const singleRestaurant = await getRestaurantDetails(props.params.slug);
	if (!singleRestaurant) return;

	return (
		<>
			<div className="w-[70%] rounded bg-white p-3 shadow">
				<RestaurantNavbar slug={singleRestaurant.slug} />
				<RestaurantTitle name={singleRestaurant.name} />
				<RestaurantRating reviews={singleRestaurant.reviews} />
				<RestaurantDescription description={singleRestaurant.description} />
				<RestaurantImagesList images={singleRestaurant.images} />
				<RestaurantReviews reviews={singleRestaurant.reviews} />
			</div>
			<div className="text-reg relative w-[27%]">
				<RestaurantReservationCard />
			</div>
		</>
	);
};

export default RestaurantDetails;
