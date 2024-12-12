import { createSlice } from "@reduxjs/toolkit";
const initialState={
number:0,
control:false,
start:false,
}


export const capSlice=createSlice({
name:"trycapth",
initialState,
reducers:{
 selectTrue: (state, action) => {
  const { randomIndex, number } = action.payload;
  if (randomIndex === number) {
    state.control = true;
    state.start = false;
    alert("Başarıyla Giriş Yaptınız");
  } else {
    state.control = false;
    alert("Yanlış resmi seçtiniz");
  }
},
startButton:(state,action)=>{
state.start=true


    }
}





})



export const{selectTrue,startButton}=capSlice.actions
export default capSlice.reducer