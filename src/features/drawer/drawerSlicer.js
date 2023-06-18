import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    drawerOpen: false
}

const drawerSlice = createSlice({
    name:'drawer',
    initialState,
    reducers:{
        set: (state)=>{
            state.drawerOpen = true;
        },
        reset: (state) =>{
            state.drawerOpen = false;
        }
    }
})


export const {set,reset} = drawerSlice.actions;
export default drawerSlice.reducer;