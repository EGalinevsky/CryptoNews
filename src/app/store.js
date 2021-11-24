import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../servives/cryptoApi";

export default configureStore ({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
})