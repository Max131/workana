import {create} from "react-test-renderer";
import PlannerCard from "./PlannerCard";

let component;

function emitVote(vote){
	console.log({vote});
}




describe("<PlannerCard />", () => {
	beforeAll(() => {
		component = create (<PlannerCard value={13} currentVote={8} emitVote={emitVote} />);
	});

	it("PlanerCard renders correct", () => {
		expect(component).toBeDefined();
	})
});