import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";

interface CartItem {
    id: number;
    name: string;
    qty: number;
    sum: number;
    price: number
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const isExist = state.items.find(item => item?.id == action?.payload?.id)
            if (isExist) {
                isExist.sum += action.payload?.price
                isExist.qty += 1
            }
            else {
                state.items.push({
                    ...action.payload,
                    sum: action?.payload?.price,
                    qty: 1
                })
            }

        },
        removeItem: (state, action) => {
            const isExist = state.items.find(item => item.id === action.payload.id)
            if (isExist && isExist.qty !== 1) {
                isExist.sum -= action.payload.price
                isExist.qty -= 1
            }
            else {
                state.items = state.items.filter(item => item.id != action.payload.id)
            }


        }
    }

});

export const { } = cartSlice.actions;
export default cartSlice.reducer