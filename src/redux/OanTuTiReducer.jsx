const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man. I love you 3000!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png" },
};

const OanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO":
      //Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      //Tạo ra mảng cược mới từ mảng cược cũ và action maCuoc do người dùng truyền lên
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };

    case "RAN_DOM":
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };

    case "END_GAME":
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc);
      let computer = state.computer;
      console.log("player", player);
      console.log("computer", computer);
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà nhau";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua sml";
          } else {
            state.ketQua = "I'm iron man. I love you 3000";
            state.soBanThang += 1
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "I'm iron man. I love you 3000";
            state.soBanThang += 1
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoà nhau";
          } else {
            state.ketQua = "Thua sml";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua sml";
          } else if (computer.ma === "bua") {
            state.ketQua = "I'm iron man. I love you 3000";
            state.soBanThang += 1
          } else {
            state.ketQua = "Hoà nhau";
          }
          break;
        default:
          state.ketQua = "I'm iron man. I love you 3000";
      }
      
      console.log(state.ketQua);
      return { ...state };

    default:
      return { ...state };
  }
};

export default OanTuTiReducer;
