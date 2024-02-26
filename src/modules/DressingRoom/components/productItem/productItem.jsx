import React, { Component } from "react";
import { connect } from "react-redux";

class ProductsItemComponent extends Component {
  render() {
    const {name,imgSrc_jpg,type,imgSrc_png} = this.props.item
    return (
      <div className="card p-2 my-2">
        <img src={imgSrc_jpg} alt="" />
        <p>{name}</p>
        <button className="btn btn-success" onClick={()=>{this.props.getCloth(type,imgSrc_png)}}>Thử đồ</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getCloth: (kind,img)=>{
      const action = {
        type: 'GET_CLOTHES',
        kind,
        img
      }
      dispatch(action)
    },

  }
}

export default connect(null,mapDispatchToProps)(ProductsItemComponent)

