import { configureStore } from "@reduxjs/toolkit";
import  capReducer  from "./feautres/cap";

export const store = configureStore({
reducer:{
cap:capReducer

}


})