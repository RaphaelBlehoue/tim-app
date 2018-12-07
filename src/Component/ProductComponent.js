import React from "react";
import PropTypes from "prop-types";

const ProductComponent = ({ product, ClassNamer, isCarousel }) => (
  <>
    {!isCarousel ? (
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
              <h5 className="price">{`${product.ProductPrice} ${
                product.ProductCurrency
              }`}</h5>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="pb-20 pb-10 pr-5">
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
              <h5 className="price">{`${product.ProductPrice} ${
                product.ProductCurrency
              }`}</h5>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

ProductComponent.defaultProps = {
  ClassNamer: "col-lg-3 col-md-3 col-sm-12 pb-30 pt-10",
  isCarousel: false
};

ProductComponent.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ]),
  ClassNamer: PropTypes.string,
  isCarousel: PropTypes.bool
};

export default ProductComponent;
