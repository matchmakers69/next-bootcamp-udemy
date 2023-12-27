import { RestaurantHeader } from "../components/RestaurantHeader";
import { RestaurantNavbar } from "../components/RestaurantNavbar";
import { MenuCard } from "./components/MenuCard";

const RestaurantMenu = () => {
	return (
		<>
			<RestaurantHeader />
			<div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
				<div className="w-[100%] rounded bg-white p-3 shadow">
					<RestaurantNavbar />
					<MenuCard />
				</div>
			</div>
		</>
	);
};

export default RestaurantMenu;
