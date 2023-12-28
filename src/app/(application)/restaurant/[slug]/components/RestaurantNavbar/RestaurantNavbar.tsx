import Link from "next/link";

interface RestaurantNavbarProps {
	slug: string;
}
const RestaurantNavbar = ({ slug }: RestaurantNavbarProps) => {
	return (
		<nav className="text-reg flex border-b pb-2">
			<Link href={`/restaurant/${slug}`} className="mr-7">
				Overview
			</Link>
			<Link href={`/restaurant/${slug}/menu`} className="mr-7">
				Menu
			</Link>
		</nav>
	);
};

export { RestaurantNavbar };
