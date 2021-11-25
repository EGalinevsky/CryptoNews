import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../servives/cryptoApi";
import { cryptoNewsApi } from "../servives/cryptoNewsApi";

export default configureStore ({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
})