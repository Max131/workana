import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import Login from "./Login";
import Users from "../users.json";
import Data from "../db.json";

let component;
const mockFunction = jest.fn();
const state = {
	isLoading: false,
	error: null,
	data: Data
}

describe("<Login />", () => {
	beforeAll(() => {
		component = render(<Login users={Users.users} state={state} setState={mockFunction} setLogin={mockFunction} setIssue={mockFunction} />);
	});

	it("Login renders correct", () => {
		expect(component).toBeDefined();

		const userSelect = component.getByDisplayValue("👤");
		fireEvent.change(userSelect, {target: {value: "1627086696352"}});
		expect(userSelect).toHaveValue("1627086696352");

		const issueSelect = component.getByDisplayValue("🔢");
		fireEvent.change(issueSelect, {target: {value: "234"}});
		expect(issueSelect).toHaveValue("234");

	});

	
});