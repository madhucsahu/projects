/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import garden from '../../assets/garden.webp';
import spiritual from '../../assets/spiritual.webp';
import './style.scss';
const ProductCategory = props =>{
    return(
        <div className="productscategory">
            <div className="wrap">
                <div className="item"style={{
                    backgroundImage:`url(${garden})`
                }}>
                    <a>Shop Garden Products</a>
                </div>
                
                <div className="item"style={{
                    backgroundImage:`url(${spiritual}`
                }}>
                    <a>Shop spiritual products</a>
                    </div>
            </div>
        </div>
    )
}

export default ProductCategory;