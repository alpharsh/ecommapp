import { configureStore }  from '@reduxjs/toolkit'
import authReducer from './authSlice'
import AdminProductsSlice from './admin/productsSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice,
    },
});

export default store;