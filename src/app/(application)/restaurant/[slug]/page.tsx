import { RestaurantHeader } from "./components/RestaurantHeader";
import { RestaurantNavbar } from "./components/RestaurantNavbar";
import { RestaurantTitle } from "./components/RestaurantTitle";
import { RestaurantRating } from "./components/RestaurantRating";
import { RestaurantDescription } from "./components/RestaurantDescription";
import { RestaurantImagesList } from "./components/RestaurantImagesList";
import { RestaurantReviews } from "./components/RestaurantReviews/RestaurantReviews";
import { RestaurantReservationCard } from "./components/RestaurantReservationCard";

const RestaurantDetails = () => {
	return (
		<>
			<RestaurantHeader />
			<div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
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
			</div>
		</>
	);
};

export default RestaurantDetails;
