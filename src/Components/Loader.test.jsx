import {create} from "react-test-renderer";
import Loader from "./Loader";

let component;

describe("<Loader />", () => {
	beforeAll(() => {
		component = create (<Loader />);
	});

	it("Loader renders correct", () => {
		expect(component).toBeDefined();
	})
});