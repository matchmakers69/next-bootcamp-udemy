import Image from "next/image";
import Link from "next/link";

const RestaurantCard = () => {
	return (
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
					<Link href="/">View more information</Link>
				</div>
			</div>
		</div>
	);
};

export { RestaurantCard };
