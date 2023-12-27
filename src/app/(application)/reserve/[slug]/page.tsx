import { ReserveForm } from "./components/ReserveForm";
import { ReserveHeader } from "./components/ReserveHeader";

const Reservation = () => {
	return (
		<>
			<div className="h-screen border-t">
				<div className="m-auto w-3/5 py-9">
					<ReserveHeader />
					<ReserveForm />
				</div>
			</div>
		</>
	);
};

export default Reservation;
