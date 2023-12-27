import Image from "next/image";

function ReserveHeader() {
	return (
		<div>
			<h3 className="font-bold">You're almost done!</h3>
			<div className="mt-5 flex">
				<Image
					className="h-18 w-32 rounded"
					src={`https://images.otstatic.com/prod1/49153814/2/medium.jpg`}
					alt="card-search"
					width={128}
					height={80}
				/>

				<div className="ml-4">
					<h1 className="text-3xl font-bold">Aiāna Restaurant Collective</h1>
					<div className="mt-3 flex">
						<p className="mr-6">Tues, 22, 2023</p>
						<p className="mr-6">7:30 PM</p>
						<p className="mr-6">3 people</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { ReserveHeader };
