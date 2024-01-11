export default function Loading() {
	return (
		<main>
			<div className="h-96 animate-pulse overflow-hidden bg-slate-200">
				<div className={`h-full bg-center`} />
			</div>
			<div className="0  m-auto -mt-9 flex w-2/3 items-start justify-between">
				<div className="w-[70%] rounded bg-white p-3 shadow">
					<nav className="text-reg flex border-b pb-2">
						<h4 className="mr-7">Overview</h4>
						<p className="mr-7">Menu</p>
					</nav>

					<div className="mt-4 h-16 w-[400px] animate-pulse rounded border-b bg-slate-200 pb-6"></div>

					<div className="flex animate-pulse items-end">
						<div className="ratings mt-2 flex items-center">
							<div className="flex w-56 items-center bg-slate-200"></div>
							<p className="text-reg ml-3"></p>
						</div>
						<div>
							<p className="text-reg ml-1 ml-4"> </p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
