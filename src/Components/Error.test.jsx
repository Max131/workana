import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import Error from "./Error";

let component;
const error = "The data is null"

describe("<Error />", () => {
	beforeAll(() => {
		component = render (<Error error={error} />);
	});

	it("Error renders correct", () => {
		expect(component).toBeDefined();
	});
});