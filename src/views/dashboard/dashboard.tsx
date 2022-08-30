import { FC, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { GetAllProducts } from "../../@redux/actions/product/product";
import { ListDropdown } from "../../components/@theme/";
import CartAmountPane from "./cart-amount-pane";
import ProductView from "./product-view";

export interface ProductProps {
    id: number,
    colour: string;
    img: string,
    name: string,
    price: number,
    quantity?: number;
    total?: number
}

export interface DashboardProps {
    className?: string;
    GetAllProducts: any,
    products: ProductProps[];
}

const Dashboard: FC<DashboardProps> = ({ className = "", GetAllProducts, products }) => {

    const [productsList, getProducts] = useState<ProductProps[]>([]);
    const [colorList, setColors] = useState<{ id: number, name: string }[]>([{ id: -1, name: 'Color filter' }])
    const propProducts = useMemo(() => products, [products]);

    useEffect(() => {
        (async () => {
            await GetAllProducts();
        })();
    }, [])

    useEffect(() => {
        if (propProducts?.length > 0) {
            let uniqueColors: string[] = [];
            propProducts?.map(product => {
                const { colour } = product
                if (uniqueColors?.indexOf(colour) === -1) {
                    return uniqueColors = [...uniqueColors, colour]
                }
                return null;
            })
            setColors([...[{ id: -1, name: 'Color filter' }], ...uniqueColors?.map((color, index) => ({ id: index, name: color }))])
        } else {
            setColors([])
        }
        getProducts(propProducts || [])
    }, [propProducts])

    const filterProducts = (value: any) => {
        getProducts(value?.name === 'Color filter' ? propProducts : propProducts?.filter(product => product.colour === value?.name))
    }

    return (
        <div className="flex flex-col" data-testid="test-id-dashboard">
            <div className="container mt-5 mb-16">
                <div className="grid grid-cols-4 gap-4 mb-5">
                    <ListDropdown data={colorList} onSelectedValueChange={value => filterProducts(value)} selector={'name'} />
                </div>
                <div className="grid grid-cols-1">
                    <ProductView productlist={productsList} />
                </div>
            </div>
            <div className="w-full fixed left-0 bottom-0 bg-primary-6000">
                <div className="container">
                    <CartAmountPane />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        products: state?.cart?.listingproduct,
    }
}

export default connect(mapStateToProps, { GetAllProducts })(Dashboard);