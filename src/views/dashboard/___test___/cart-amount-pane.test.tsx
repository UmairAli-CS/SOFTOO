import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../../../@redux/storeConfig/store";
import CartAmountPane from '../cart-amount-pane';

afterEach(() => {
    cleanup();
})

test('should render CartTotal component', () => {
    render(<Provider store={store}><CartAmountPane /></Provider>);
    const CartTotal = screen.getByTestId('test-id-total-amount');
    expect(CartTotal).toBeInTheDocument();
});
