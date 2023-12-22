import Image from "next/image";
import SearchHeader from "./components/SearchHeader";
import { NavBar } from "@/ui/components/Navbar";

const Search = () => {
	return (
		<main className="min-h-screen w-screen bg-gray-100">
			<main className="m-auto max-w-screen-2xl bg-white">
				{/* NAVBAR */}
				<NavBar />
				{/* HEADER */}
				<div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
					<SearchHeader />
				</div>
				<div className="m-auto flex w-2/3 items-start justify-between py-4">
					{/* SEARCH SIDE BAR */}
					<div className="w-1/5">
						<div className="border-b pb-4">
							<h1 className="mb-2">Region</h1>
							<p className="text-reg font-light">Toronto</p>
							<p className="text-reg font-light">Ottawa</p>
							<p className="text-reg font-light">Montreal</p>
							<p className="text-reg font-light">Hamilton</p>
							<p className="text-reg font-light">Kingston</p>
							<p className="text-reg font-light">Niagara</p>
						</div>
						<div className="mt-3 border-b pb-4">
							<h1 className="mb-2">Cuisine</h1>
							<p className="text-reg font-light">Mexican</p>
							<p className="text-reg font-light">Italian</p>
							<p className="text-reg font-light">Chinese</p>
						</div>
						<div className="mt-3 pb-4">
							<h1 className="mb-2">Price</h1>
							<div className="flex">
								<button className="text-reg w-full rounded-l border p-2 font-light">$</button>
								<button className="text-reg w-full border-b border-r border-t p-2 font-light">$$</button>
								<button className="text-reg w-full rounded-r border-b border-r border-t p-2 font-light">
									$$$
								</button>
							</div>
						</div>
					</div>
					{/* SEARCH SIDE BAR */}
					<div className="w-5/6">
						{/* RESAURANT CAR */}
						<div className="flex border-b pb-5">
							<Image
								className="w-44 rounded"
								src={`https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg`}
								alt="card-search"
								width={0}
								height={0}
								sizes="100vw"
							/>

							<div className="pl-5">
								<h2 className="text-3xl">Aiāna Restaurant Collective</h2>
								<div className="flex items-start">
									<div className="mb-2 flex">*****</div>
									<p className="ml-2 text-sm">Awesome</p>
								</div>
								<div className="mb-9">
									<div className="text-reg flex font-light">
										<p className="mr-4">$$$</p>
										<p className="mr-4">Mexican</p>
										<p className="mr-4">Ottawa</p>
									</div>
								</div>
								<div className="text-red-600">
									<a href="/">View more information</a>
								</div>
							</div>
						</div>
						{/* RESAURANT CAR */}
					</div>
				</div>
			</main>
		</main>
	);
};

export default Search;
