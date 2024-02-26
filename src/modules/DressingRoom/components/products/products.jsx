import React, { Component } from "react";
import ProductsItemComponent from "../productItem/productItem";
import { connect } from "react-redux";
class ProductsComponent extends Component {
  render() {
    let productFilter = this.props.productList.filter((item)=>{
      return item.type === this.props.typeFilter
    })
    return (
      <div className="row">
        {productFilter.map((item,index)=>{
          return(
            <div className="col-4" key={index}>
            <ProductsItemComponent item={item} />
          </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.dressingRoomReducer,
    typeFilter: state.chooseClothesTypeReducer
  };
};

export default connect(mapStateToProps)(ProductsComponent);
