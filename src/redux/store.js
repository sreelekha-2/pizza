
import {configureStore} from "@reduxjs/toolkit"

import cartReducer from "./counter"
import priceReducer from "./total"

export const store=configureStore({
    reducer:{
        cartcounter:cartReducer,
        pricecounter:priceReducer

    }
})