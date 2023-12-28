/* eslint-disable @typescript-eslint/no-unsafe-call */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RestaurantHeader } from "../RestaurantHeader";

describe("RestaurantHeader Component", () => {
	it("renders correctly with formatted title", () => {
		const { getByText } = render(<RestaurantHeader name="adrak-yorkville-toronto" />);

		expect(getByText("adrak yorkville (toronto)")).toBeInTheDocument();
	});
});
