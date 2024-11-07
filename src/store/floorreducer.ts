//FILL HERE 3.1
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//האינטרפיס למצב של כל קומה
interface FloorState {
  floors: {
    [key: number]: boolean;
  };
}

const initialState: FloorState = {
  floors: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  }
};

const floorSlice = createSlice({
  name: 'floor',
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => { 
      const floorNumber = action.payload;
      if (floorNumber in state.floors) {
        state.floors[floorNumber]  = false? true : false;
      }
    }
  }
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;