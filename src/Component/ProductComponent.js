import React from "react";
import PropTypes from "prop-types";

const ProductComponent = ({ product, ClassNamer }) => (
  <div className={ClassNamer}>
    <div className="ee-product">
      <div className="image">
        <a href="/" className="img">
          <img src={product.ProductImage} alt={product.ProductName} />
        </a>

        <a href="/" className="add-to-cart">
          <i className="ti-shopping-cart" />
          <span>ADD TO CART</span>
        </a>
      </div>

      <div className="content">
        <div className="category-title">
          <a href="/" className="cat">
            {product.ProductCategory}
          </a>
          <h5 className="title">
            <a href="/">{product.ProductName}</a>
          </h5>
        </div>

        <div className="price-ratting">
          <h5 className="price">{`${product.ProductCurrency}${
            product.ProductPrice
          }`}</h5>
        </div>
      </div>
    </div>
  </div>
);

ProductComponent.defaultProps = {
  ClassNamer: "col-lg-4 col-md-4 col-sm-12 pb-30 pt-10"
};

ProductComponent.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ]),
  ClassNamer: PropTypes.string
};

export default ProductComponent;
