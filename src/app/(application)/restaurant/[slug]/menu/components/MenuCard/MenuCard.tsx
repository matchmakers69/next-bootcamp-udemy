function MenuCard() {
	return (
		<section className="mt-5 bg-white">
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
		</section>
	);
}

export { MenuCard };
