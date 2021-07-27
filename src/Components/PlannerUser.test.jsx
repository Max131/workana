import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import PlannerUser from "./PlannerUser";

let component;
const user = {
	id: 13,
	name: "John"
}
const user2 = {
	id: 15,
	name: "Jane"
}
describe("<PlannerUser />", () => {
	beforeAll(() => {
	});
	
	it("PlannerUser renders all colored", () => {
		component = render(<PlannerUser user={user} current={user2}  allHasVoted={true}/>);
		expect(component).toBeDefined();
	});

	it("PlannerUser renders just voted", () => {
		component = render(<PlannerUser user={user} current={user2}  allHasVoted={false}/>);
		expect(component).toBeDefined();
	});

	it("PlannerUser renders current user with all voted", () => {
		component = render(<PlannerUser user={user} current={user}  allHasVoted={true}/>);
		expect(component).toBeDefined();
	});

	it("PlannerUser renders current user without al voted", () => {
		component = render(<PlannerUser user={user} current={user2}  allHasVoted={false}/>);
		expect(component).toBeDefined();
	})

});