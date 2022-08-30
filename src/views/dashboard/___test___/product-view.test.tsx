import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../../../@redux/storeConfig/store";
import ProductView from '../product-view';
import renderer from "react-test-renderer";

afterEach(() => {
    cleanup();
})

test('should render ProductView component', () => {
    const products = [{ img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024', name: 'New Ladies Store', price: 4, quantity: 2 }]
    render(<Provider store={store}><ProductView productlist={products} /></Provider>);
    const ProductViewElement = screen.getByTestId('test-id-product-view');
    expect(ProductViewElement).toBeInTheDocument();
});

test('ProductView matches snapshot', () => {
    const products = [{ img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024', name: 'New Ladies Store', price: 4, quantity: 2 }]
    const Component = renderer.create(<Provider store={store}><ProductView productlist={products} /></Provider>)
    let tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
})
