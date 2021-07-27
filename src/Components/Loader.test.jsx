import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import Loader from "./Loader";

let component;

describe("<Loader />", () => {
	beforeAll(() => {
		component = render(<Loader />);
	});

	it("Loader renders correct", () => {
		expect(component).toBeDefined();
	})
});