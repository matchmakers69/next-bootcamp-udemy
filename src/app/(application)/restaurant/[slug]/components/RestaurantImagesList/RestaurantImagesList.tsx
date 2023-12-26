import Image from "next/image";
function RestaurantImagesList() {
	return (
		<div>
			<h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">5 photos</h1>
			<div className="flex flex-wrap">
				<Image
					className="mb-1 mr-1 h-44 w-56"
					src={`https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg`}
					alt="card-search"
					width={224}
					height={176}
				/>
				<Image
					className="mb-1 mr-1 h-44 w-56"
					src={`https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg`}
					alt="card-search"
					width={224}
					height={176}
				/>

				<Image
					className="mb-1 mr-1 h-44 w-56"
					src={`https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg`}
					alt="card-search"
					width={224}
					height={176}
				/>

				<Image
					className="mb-1 mr-1 h-44 w-56"
					src={`https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg`}
					alt="card-search"
					width={224}
					height={176}
				/>
				<Image
					className="mb-1 mr-1 h-44 w-56"
					src={`https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg`}
					alt="card-search"
					width={224}
					height={176}
				/>
			</div>
		</div>
	);
}

export { RestaurantImagesList };
