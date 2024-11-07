//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 const roles = ["Unknown Personnel" , "Guest" , "Student" , "Developer" , "Executive Personnel"]

 type Role = typeof roles[number];
 
 interface RoleState {
   currentRole: Role;
 }
 
 const initialState: RoleState = {
   currentRole: roles[0]
 };
 
 const roleSlice = createSlice({
   name: 'role',
   initialState,
   reducers: {
     setRole: (state, action: PayloadAction<Role>) => {
       if (roles.includes(action.payload)) {
         state.currentRole = action.payload;
       }
     }
   }
 });
 
 export const { setRole } = roleSlice.actions;
 export default roleSlice.reducer;

