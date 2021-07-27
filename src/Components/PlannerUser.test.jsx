import { create } from "react-test-renderer";
import PlannerUser from "./PlannerUser";

let component;
const user = {
		name: "John",
		id: 13
}

describe("<PlannerUser />", () => {
		beforeAll(() => {
				component = create(<PlannerUser user={user} current={user} allHasVoted={true}/>);
		});

		it("Component render Ok", () => { 
				expect(component).toBeDefined();
		});
});

