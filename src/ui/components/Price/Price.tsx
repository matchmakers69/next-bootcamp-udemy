import { PRICE } from "@prisma/client";
import { type ReactNode } from "react";

interface PriceProps {
	price: PRICE;
}

function Price({ price }: PriceProps) {
	const renderPrice = () => {
		const priceMap: Record<PRICE, ReactNode> = {
			[PRICE.CHEAP]: (
				<>
					<span>££</span>
					<span className="text-gray-400">££</span>
				</>
			),
			[PRICE.REGULAR]: (
				<>
					<span>£££</span>
					<span className="text-gray-400">£</span>
				</>
			),
			[PRICE.EXPENSIVE]: <span>££££</span>,
		};

		return priceMap[price] ?? null;
	};

	return <p className="mr-3 flex">{renderPrice()}</p>;
}

export { Price };
