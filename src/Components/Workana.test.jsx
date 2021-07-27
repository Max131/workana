import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import Workana from "./Workana";
import Data from "../db.json";

let component;
const mockFunction = jest.fn();
const err = null;
const issue = Data[2];
const currUser = {
    id: 1627086696352,
    name: "Jane",
    email: "jane@mohmal.im"
}

describe("<Workana />", () => {
	beforeAll(() => {
		component = render(<Workana currentIssue={issue} error={err} user={currUser} setLogin={mockFunction} />)
	});
	
	it("Workana renders correct", () => {
		expect(component).toBeDefined();
	});
});