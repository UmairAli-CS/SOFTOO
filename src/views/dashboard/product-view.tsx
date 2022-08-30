import React, { FC, useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetCalculatedAmount } from "../../@redux/actions/product/product";
import { NcImage, Input, ButtonPrimary } from "../../components/@theme";

export interface ProductViewProps {
    productlist: any[],
    GetCalculatedAmount: ((products: any[]) => void)
}

export interface ProductProps {
    id: number,
    colour: string;
    img: string,
    name: string,
    price: number,
    quantity?: number;
    total?: number
}

const ProductView: FC<ProductViewProps> = ({ productlist = [], GetCalculatedAmount }) => {

    const [products, setAllProducts] = useState<ProductProps[]>([]);

    const getCalculatedPrice = useCallback((pQuantity: number, productIndex: number) => {
        let filteredProduct: ProductProps[] = products?.map((result: any, index: number) => {
            if (productIndex === index) {
                return { ...result, total: pQuantity * result?.price, quantity: pQuantity }
            }
            return { ...result };
        })
        setAllProducts(filteredProduct)
        GetCalculatedAmount(filteredProduct)
        // eslint-disable-next-line
    }, [products])

    useEffect(() => {
        setAllProducts(productlist?.map(product => ({ ...product, quantity: 0 })))
    }, [productlist])

    if (products?.length > 0) {
        return (
            <div>
                {products?.map((product: any, index: number) => {
                    const { img, name, price, quantity, id } = product;
                    return (
                        <div className="flex justify-between mb-5" key={id} data-testid="test-id-product-view">
                            <div className={`nc-CardCategory5 grid grid-cols-4 gap-4`} data-nc-id="CardCategory5">
                                <div className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 rounded-2xl overflow-hidden group`}
                                >
                                    <NcImage src={img}
                                        className="object-cover w-full h-full rounded-2xl"
                                    />
                                    <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
                                </div>
                                <div className="ml-3">
                                    <h2 className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}>
                                        {name}
                                    </h2>
                                    <p className="text-base font-medium truncate text-right">£ {price}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex flex-nowrap mb-3">
                                    <ButtonPrimary className="h-8 text-xs p-0 rounded-r" onClick={() => getCalculatedPrice(quantity - 1, index)}>-</ButtonPrimary>
                                    <Input type={'number'} disabled value={quantity} min={0} max={1000} className="w-36 h-12 mb-0 rounded-none text-center" />
                                    <ButtonPrimary className="h-8 text-xs rounded-l" onClick={() => getCalculatedPrice(quantity + 1, index)}>+</ButtonPrimary>
                                </div>
                                <ButtonPrimary className="h-6 text-xs" onClick={() => getCalculatedPrice(0, index)} fontSize="12">Remove</ButtonPrimary>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <h2 key={`empty-list`}>No Product Found</h2>
    )
}
const mapStateToProps = (state: any) => {
    return {
        products: state?.cart?.listingproduct,
    }
}

export default React.memo(connect(mapStateToProps, { GetCalculatedAmount })(ProductView))