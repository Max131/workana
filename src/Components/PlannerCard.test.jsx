import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import PlannerCard from "./PlannerCard";

let component;
let val = 13;
let vote = 13;
const mockFunction = jest.fn();

describe("<PlannerCard />", () => {
	beforeAll(() => {
		component = render(<PlannerCard value={val} currentVote={vote} emitVote={mockFunction} />);
	});

	it("Card renders correct", () => {
		expect(component).toBeDefined();
		
		const card = component.getByText("13");
		fireEvent.click(card);
		expect(mockFunction).toHaveBeenCalledTimes(1);
	});

	it("Card will be clicked", () => {
		component = render(<PlannerCard value={val} currentVote={8} emitVote={mockFunction} />);
		expect(component).toBeDefined();
	})
});