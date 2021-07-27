import { render } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
	beforeAll(() => {
		component = render(<App />)
    EventSource = () => {};
	});
	
	it("App renders correct", () => {
		expect(component).toBeDefined();
	});
});