import {create} from "react-test-renderer";
import Error from "./Error";

let component;
const error = "The data is null"

describe("<Error />", () => {
	beforeAll(() => {
		component = create (<Error error={error} />);
	});

	it("Error renders correct", () => {
		expect(component).toBeDefined();
	})
});