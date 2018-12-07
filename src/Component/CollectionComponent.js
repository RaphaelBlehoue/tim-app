import React from "react";
import PropTypes from "prop-types";
import ProductComponent from "./ProductComponent";
import "./container.scss";

const CollectionComponent = ({ dataTitle, Title, ClassNamer, products }) => (
  <div className="product-section section mb-60">
    <div className="container">
      <div className="row">
        <div className="col-12 mb-40">
          <div className="section-title-one" data-title={dataTitle}>
            <h1>{Title}</h1>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            {products.map(product => (
              <ProductComponent
                key={product.Id}
                product={product}
                ClassNamer={ClassNamer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

CollectionComponent.propTypes = {
  products: PropTypes.array,
  ClassNamer: PropTypes.string,
  Title: PropTypes.string,
  dataTitle: PropTypes.string
};

export default CollectionComponent;
