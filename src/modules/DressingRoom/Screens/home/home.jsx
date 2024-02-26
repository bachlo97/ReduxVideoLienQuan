import React, { Component } from 'react'
import HeaderComponent from '../../Layouts/Header/header'
import CategoriesComponent from '../../components/categories/categories'
import ProductsComponent from '../../components/products/products'
import ModelComponent from '../../components/model/model'

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/> 
        <div className='container fluid'>
          <div className="row">
            <div className="col-6">
              <CategoriesComponent/>
              <ProductsComponent/>
            </div>
            <div className="col-6">
              <ModelComponent/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
