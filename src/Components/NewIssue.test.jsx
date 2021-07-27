import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import NewIssue from "./NewIssue";
import Issues from "../db.json";
import Users from "../users.json";

let component;
const Data = {
  isLoading: false,
  error: null,
  data: Issues
}
const mockFunction = jest.fn();

describe("<NewIssue />", () => {
	beforeAll(() => {
		component = render(<NewIssue setShowIssueWindow={mockFunction} setState={mockFunction} data={Data} users={Users.users} />)
	});
	
	it("Logout renders correct", () => {
    window.alert = () => {};
		expect(component).toBeDefined();
    
    const input = component.getByDisplayValue(1);
    const submit = component.getByText("Add");
    const cancel = component.getByText("Cancel");
    
    fireEvent.change(input, {target: {value: '23'}})
    fireEvent.click(submit);
    expect(mockFunction).toHaveBeenCalled();
		
    fireEvent.change(input, {target: {value: '234'}})
    fireEvent.click(submit);
    
    expect(mockFunction).toHaveBeenCalled();

    fireEvent.click(cancel);
    expect(mockFunction).toHaveBeenCalled();
	});
});