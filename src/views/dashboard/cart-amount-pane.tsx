import { FC } from "react";
import { Label } from "../../components/@theme";
import { connect } from "react-redux";
export interface CartAmountPaneProps {
    totalamouncalculated?: number;
}

const CartAmountPane: FC<CartAmountPaneProps> = ({ totalamouncalculated = 0 }) => {

    return (
        <div className="flex justify-between w-full h-16 flex justify-center items-center text-white text-2xl" data-testid="test-id-total-amount">
            <Label className="text-white">Total</Label>
            <Label className="text-white">£ {totalamouncalculated.toFixed(2)}</Label>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        totalamouncalculated: state?.cart?.totalamouncalculated,
    }
}

export default connect(mapStateToProps, {})(CartAmountPane)