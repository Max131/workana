import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import Logout from "./Logout";

let component;
const mockFunction = jest.fn();

describe("<Logout />", () => {
	beforeAll(() => {
		component = render(<Logout doLogout={mockFunction} />)
	});
	
	it("Logout renders correct", () => {
		const button = component.getByTitle("Logout");
		expect(button).toBeDefined();
		
		fireEvent.click(button);
		expect(mockFunction).toHaveBeenCalledTimes(1);
	});
});