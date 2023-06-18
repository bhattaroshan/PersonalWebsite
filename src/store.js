import {configureStore} from '@reduxjs/toolkit';
import drawerReducer from './features/drawer/drawerSlicer';

export const store = configureStore({
    reducer:{
        drawer: drawerReducer
    }
});
