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
	const singleRestaurantBySlug = await getRestaurantDetails(props.params.slug);
	if (!singleRestaurantBySlug) return;
	console.log(singleRestaurantBySlug);
	return (
		<>
			<div className="w-[70%] rounded bg-white p-3 shadow">
				<RestaurantNavbar />
				<RestaurantTitle />
				<RestaurantRating />
				<RestaurantDescription />
				<RestaurantImagesList />
				<RestaurantReviews />
			</div>
			<div className="text-reg relative w-[27%]">
				<RestaurantReservationCard />
			</div>
		</>
	);
};

export default RestaurantDetails;
