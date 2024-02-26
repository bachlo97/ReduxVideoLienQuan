import React, { Component } from "react";
import "./BaiTapBurger.css";
import { connect } from "react-redux";
class BaiTapBurger extends Component {
  renderBurgerFilling() {
    // console.log(this.props.burger)
    let { burger } = this.props;
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadFilling = [];
      for (let i = 0; i < value; i++) {
        breadFilling.push(<div className={propsBurger} key={i}></div>);
      }
      return breadFilling;
    });
  } 

  renderMenu() {
    let { menu,burger} = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button onClick={()=>{
                this.props.addBread(propsMenu,1)
            }} className="btn btn-success">+</button>
            {burger[propsMenu]}
            <button onClick={()=>{
                this.props.addBread(propsMenu,-1)
            }} className="btn btn-danger">-</button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu]*price}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-success">Bài tập burger</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Banh burger cua ban</h3>
            <div className="breadTop"></div>
            {this.renderBurgerFilling()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Thuc an</th>
                  <th></th>
                  <th>Don gia</th>
                  <th>Thanh tien</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                    <td colSpan={2}></td>
                    <td>Total</td>
                    <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    burger: rootReducer.BurgerReducer.burger,
    menu: rootReducer.BurgerReducer.menu,
    total: rootReducer.BurgerReducer.total,
  };
};

const mapDispatchToProps = dispatch =>{
    return {
        addBread: (propsBurger,amount)=>{
            const action = {
                type:'ADD_BREAD',
                propsBurger,
                amount
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BaiTapBurger);
