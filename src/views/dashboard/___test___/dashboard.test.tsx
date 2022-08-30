import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../../../@redux/storeConfig/store";
import Dashboard from '../dashboard';

afterEach(() => {
    cleanup();
})

test('should render Dashboard component', () => {
    render(<Provider store={store}><Dashboard /></Provider>);
    const DashboardElement = screen.getByTestId('test-id-dashboard');
    expect(DashboardElement).toBeInTheDocument();
    expect(DashboardElement).toHaveTextContent('Color filter');
    expect(DashboardElement).toHaveClass('flex flex-col');
});
