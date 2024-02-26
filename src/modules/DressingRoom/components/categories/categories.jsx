import React, { Component } from "react";
import { connect } from "react-redux";
class CategoriesComponent extends Component {
  render() {
    console.log('hello  ', this.props)
    return (
      <div className="btn-group">
        {this.props.categoryList.map((item, index) => {
          return (
            <button key={index} className="btn btn-secondary" onClick={() => {
              this.props.dispatch({
                type: 'FILTER_CLOTHES',
                payload: item.type
              })
            }} style={ 
              {backgroundColor: item.type === this.props.typeFilter ? 'blue':'gray' }
            }>
              {item.showName}
            </button>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categoryList: state.categoriesReducer,
    typeFilter: state.chooseClothesTypeReducer
    
  };
};


export default connect(mapStateToProps)(CategoriesComponent);
