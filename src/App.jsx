import { useState } from "react";
import BTGioHangRedux from "./modules/BaiTapGioHang/BTGioHangRedux";
import BaiTapBurger from "./modules/BaiTapBurger/BaiTapBurger";
import BaiTapGameXucXac from "./modules/BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapOanTuTi from "./modules/BaiTapOanTuTi/BaiTapOanTuTi";
import HomeScreen from "./modules/DressingRoom/Screens/home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeScreen/>     
      {/* <BaiTapOanTuTi /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* <BaiTapBurger /> */}
      {/* <BTGioHangRedux/> */}
    </>
  );
}

export default App;
