import { type ReactNode } from "react";
import { RestaurantHeader } from "./components/RestaurantHeader";

function RestaurantLayout({ children, params }: { children: ReactNode; params: { slug: string } }) {
	return (
		<>
			<RestaurantHeader name={params.slug} />
			<div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">{children}</div>
		</>
	);
}

export default RestaurantLayout;
