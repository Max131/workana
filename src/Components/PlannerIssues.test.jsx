import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import PlannerIssues from "./PlannerIssues";

let component;
const mockFunction = jest.fn();

describe("<PlannerIssues />", () => {
	beforeAll(() => {
		component = render(<PlannerIssues numUsers={5} issue={234} />)
	});
	
	test("PlannerIssues renders correct", () => {
		expect(component).toBeDefined();
	});
});