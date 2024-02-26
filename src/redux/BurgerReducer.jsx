const burgerState = {
  burger: { salad: 1, cheese:1 , beef: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
  // burger2: [{name: 'salad',soLuong: 1,donGia: 10},
  // {name: 'cheese',soLuong: 1,donGia: 20},
  // {name: 'beef',soLuong: 1,donGia: 50}]
};


export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREAD": {
      let { propsBurger, amount } = action;
      //Thay doi so luong
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return state;
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;

      //Tinh tong tien:
      state.total += amount * state.menu[propsBurger];
      return { ...state };
    }
  }
  return { ...state };
};
