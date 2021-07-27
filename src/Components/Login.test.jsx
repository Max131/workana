import {create} from "react-test-renderer";
import Login from "./Login";
import Users from "../users.json";
import Data from "../db.json";
// isLoading: true,
//    error: null,
let component;
const state = {
	isLoading: false,
	error: null,
	data: Data
}

function setState(state){
	console.log("Setting state:", state);
}
function setLogin({id, name}){
	console.log({id});
	console.log({name});
}
function setIssue({issue}){
	console.log(issue);
}

describe("<Login />", () => {
	beforeAll(() => {
		component = create (<Login users={Users.users} state={state} setState={setState} setLogin={setLogin} setIssue={setIssue} />);
	});

	it("Login renders correct", () => {
		expect(component).toBeDefined();
	})
});