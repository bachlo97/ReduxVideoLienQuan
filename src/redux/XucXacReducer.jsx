const xucXacState = {
  taiXiu: true, //true là tài(từ 3->11), false là xỉu(>12)
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/gameXucXac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const gameXucXacReducer = (state = xucXacState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.taiXiu = action.taiXiu
      return {...state}
    }
    case "PLAY_GAME":{
      // B1 xử lý ramdom xúc xắc
      let mangXucXacNgauNhien = [];
      for(let i=0;i<3 ;i++){
        //Mỗi lần lặp random ra số ngẫu nhiên từ 1 -> 6
        let soNgauNhien = Math.floor(Math.random()*6) + 1;
        // Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
        let xucXacNgauNhien = {ma: soNgauNhien,hinhAnh:`./img/gameXucXac/${soNgauNhien}.png`}
        mangXucXacNgauNhien.push(xucXacNgauNhien)
      }
      state.mangXucXac = mangXucXacNgauNhien

      //B2 xử lý tăng bàn chơi
      state.tongSoBanChoi += 1;

      //B3 xử lý số bàn thắng
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem,xucXac,index)=>{
        return tongDiem += xucXac.ma;
      },0)

      if((tongSoDiem > 11 && state.taiXiu) || (tongSoDiem <= 11 && !state.taiXiu)){
        state.soBanThang += 1;
      }
      return {...state}
    }
    default:
      return { ...state };
  }
};

export default gameXucXacReducer;
