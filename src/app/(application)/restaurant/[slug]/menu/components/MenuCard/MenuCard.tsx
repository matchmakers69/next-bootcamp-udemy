import { type MenuItem } from "@/api/services/interfaces";

interface MenuCardProps {
	menuItem: MenuItem;
}

function MenuCard({ menuItem }: MenuCardProps) {
	return (
		<>
			{/* MENU CARD */}
			<div className=" mb-3 w-[49%] rounded border p-3">
				<h3 className="text-lg font-bold capitalize">{menuItem.name}</h3>
				<p className="mt-1 text-sm font-light">{menuItem.description}</p>
				<p className="mt-7">{menuItem.price}</p>
			</div>
		</>
	);
}

export { MenuCard };
