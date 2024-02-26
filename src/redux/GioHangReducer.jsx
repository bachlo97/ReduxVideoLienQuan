// Khởi tạo giá trị ban đầu của store
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "/public/img/sp_iphoneX.png",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};
export const GioHangReducer = (state = stateGioHang, action) => {
  console.log({ action });
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //Xử lý logic thêm giỏ hàng
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      //Xoá giỏ hàng dựa vào index
      gioHangCapNhat.splice(action.index, 1);
      //Gắn giỏ hàng mới cho state.gioHang => render lại được giao diện
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM_SL": {
      const {index,tangGiam} = action
      let gioHangCapNhat = [...state.gioHang];
      if(tangGiam){
        gioHangCapNhat[index].soLuong += 1;
      }else{
        if(gioHangCapNhat[index].soLuong > 1){
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
      state.gioHang = gioHangCapNhat;
      return {...state}
    }
  }
  return { ...state };
};

// Mục tiêu của phương thức componentWillUnmount để dọn dẹp trước khi 1 component chết đi để trách bị rò rỉ bộ nhớ(vì component trước khi chết đi đó vẫn có thể có những hàm chạy ngầm bên dưới nếu không dùng phương thức componentWillUnmount thì những hàm này vẫn sẽ có thể tiếp tục chạy sau(ví dụ setInterval bên trong component chết đi đó) khi component chết đi)
