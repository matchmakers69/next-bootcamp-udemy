import Link from "next/link";
import NavBar from "@/ui/components/Navbar/NavBar";

const RestaurantMenu = () => {
	return (
		<main className="min-h-screen w-screen bg-gray-100">
			<main className="m-auto max-w-screen-2xl bg-white">
				{/* NAVBAR */}
				<NavBar /> {/* HEADER */}
				<div className="h-96 overflow-hidden">
					<div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
						<h1 className="captitalize text-shadow text-center text-7xl text-white">
							Milestones Grill (Toronto)
						</h1>
					</div>
				</div>
				{/* HEADER */} {/* DESCRIPTION PORTION */}
				<div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
					<div className="w-[100%] rounded bg-white p-3 shadow">
						{/* RESAURANT NAVBAR */}
						<nav className="text-reg flex border-b pb-2">
							<Link href="/restaurant/milestone-grill" className="mr-7">
								Overview
							</Link>
							<Link href="/restaurant/milestone-grill/menu" className="mr-7">
								Menu
							</Link>
						</nav>
						{/* RESAURANT NAVBAR */} {/* MENU */}
						<main className="mt-5 bg-white">
							<div>
								<div className="mb-1 mt-4 pb-1">
									<h1 className="text-4xl font-bold">Menu</h1>
								</div>
								<div className="flex flex-wrap justify-between">
									{/* MENU CARD */}
									<div className=" mb-3 w-[49%] rounded border p-3">
										<h3 className="text-lg font-bold">Surf and Turf</h3>
										<p className="mt-1 text-sm font-light">A well done steak with lobster and rice</p>
										<p className="mt-7">$80.00</p>
									</div>
									{/* MENU CARD */}
								</div>
							</div>
						</main>
						{/* MENU */}
					</div>
				</div>
				{/* DESCRIPTION PORTION */}
			</main>
		</main>
	);
};

export default RestaurantMenu;
