import { combineReducers } from "redux";
import { GioHangReducer } from "./gioHangReducer";
import { BurgerReducer } from "./BurgerReducer";
import gameXucXacReducer from "./XucXacReducer";
import OanTuTiReducer from "./OanTuTiReducer";
import dressingRoomReducer from "./DressingRoomReducer";
import categoriesReducer from "./CategoriesReducer";
import chooseClothesTypeReducer from "./chooseClothesType";
import wearClothesReducer from "./WearClothesReducer";
//store tổng ứng dụng
export const rootReducer = combineReducers({
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    GioHangReducer,
    BurgerReducer,
    gameXucXacReducer,
    OanTuTiReducer,
    dressingRoomReducer,
    categoriesReducer,
    chooseClothesTypeReducer,
    wearClothesReducer,
})