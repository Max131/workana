import {create} from "react-test-renderer";
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
		component = create (<PlannerUser user={user} current={user2}  allHasVoted={true}/>);
	});

	it("PlannerUser renders correct", () => {
		expect(component).toBeDefined();
	})
});