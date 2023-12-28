/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PRICE } from "@prisma/client";
import { Price } from "../Price";

describe("Price Component", () => {
	it("renders correct spans based on price", () => {
		const cheapPrice = PRICE.CHEAP;
		const regularPrice = PRICE.REGULAR;
		const expensivePrice = PRICE.EXPENSIVE;

		const { queryAllByText } = render(
			<div>
				<Price price={cheapPrice} />
				<Price price={regularPrice} />
				<Price price={expensivePrice} />
			</div>,
		);

		// Assert that the correct spans are rendered for each price
		expect(queryAllByText("££")).toHaveLength(2);
		expect(queryAllByText("£££")).toHaveLength(1);
		expect(queryAllByText("££££")).toHaveLength(1);
	});
});
