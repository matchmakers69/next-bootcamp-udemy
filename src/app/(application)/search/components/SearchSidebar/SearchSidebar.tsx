import { PRICE, type Cuisine, type Location } from "@prisma/client";
import Link from "next/link";

interface SearchSidebarProps {
	locations: Location[];
	cuisines: Cuisine[];
	searchParams: { city?: string; cuisine?: string; price?: PRICE };
}

const prices = [
	{
		id: 1,
		price: PRICE.CHEAP,
		label: "£",
		className: "text-reg w-full rounded-l border p-2 font-light text-center",
	},
	{
		id: 2,
		price: PRICE.REGULAR,
		label: "££",
		className: "text-reg w-full border p-2 font-light text-center",
	},
	{
		id: 3,
		price: PRICE.EXPENSIVE,
		label: "£££",
		className: "text-reg w-full rounded-r border p-2 font-light text-center",
	},
];

const SearchSidebar = ({ locations, cuisines, searchParams }: SearchSidebarProps) => {
	return (
		<div className="w-1/5">
			<div className="flex flex-col border-b pb-4">
				<h1 className="mb-2">Region</h1>
				{locations.map((location) => (
					<Link
						href={{
							pathname: "/search",
							query: {
								...searchParams,
								city: location.name,
							},
						}}
						key={location.id}
						className="text-reg font-light capitalize"
					>
						{location.name}
					</Link>
				))}
			</div>
			<div className="mt-3 flex flex-col border-b pb-4">
				<h1 className="mb-2">Cuisine</h1>
				{cuisines.map((cuisine) => (
					<Link
						href={{
							pathname: "/search",
							query: {
								...searchParams,
								cuisine: cuisine.name,
							},
						}}
						key={cuisine.id}
						className="text-reg font-light capitalize"
					>
						{cuisine.name}
					</Link>
				))}
			</div>
			<div className="mt-3 pb-4">
				<h1 className="mb-2">Price</h1>
				<div className="flex">
					{prices.map(({ price, id, label, className }) => (
						<Link
							key={id}
							href={{
								pathname: "/search",
								query: {
									...searchParams,
									price: price,
								},
							}}
							className={className}
						>
							{label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export { SearchSidebar };
