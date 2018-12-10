import React from "react";
import _ from "lodash";
import Layout from "Component/layout/Layout";
import CollectionComponent from "Component/CollectionComponent";
import ImgProduct from "styles/assets/images/product/product-5.png";
import CollectionCarouselComponent from "Component/CollectionCarouselComponent";

const products = [
  {
    Id: _.uniqueId(["product"]),
    ProductImage: `${ImgProduct}`,
    ProductName: "Mony Handycam Z 105",
    ProductCategory: "Camera",
    ProductPrice: "20 000",
    ProductCurrency: "FCFA"
  },
  {
    Id: _.uniqueId(["product"]),
    ProductImage: `${ImgProduct}`,
    ProductName: "Mony Handycam Z 190",
    ProductCategory: "Camera",
    ProductPrice: "50 000",
    ProductCurrency: "FCFA"
  },
  {
    Id: _.uniqueId(["product"]),
    ProductImage: `${ImgProduct}`,
    ProductName: "Mony Camera Z 1105",
    ProductCategory: "Camera",
    ProductPrice: "120 000",
    ProductCurrency: "FCFA"
  },
  {
    Id: _.uniqueId(["product"]),
    ProductImage: `${ImgProduct}`,
    ProductName: "Mony Crayon w 25",
    ProductCategory: "Camera",
    ProductPrice: "1000",
    ProductCurrency: "FCFA"
  },
  {
    Id: _.uniqueId(["product"]),
    ProductImage: `${ImgProduct}`,
    ProductName: "Mony Crayon w 25",
    ProductCategory: "Camera",
    ProductPrice: "1000",
    ProductCurrency: "FCFA"
  },
  {
    Id: _.uniqueId(["product"]),
    ProductImage: `${ImgProduct}`,
    ProductName: "Mony Crayon w 25",
    ProductCategory: "Camera",
    ProductPrice: "1000",
    ProductCurrency: "FCFA"
  }
];

const App = () => (
  <Layout>
    <div className="content-wrapper">
      <div className="page-header page-header-light">
        <div className="header-elements-md-inline">
          <div className="d-flex">
            <div className="content">
              <CollectionComponent
                products={products}
                Title="Nouveaux"
                dataTitle="Nouvelle arrivage"
              />
              <CollectionComponent
                products={products}
                Title="Recommandation"
                dataTitle="Meilleurs Ventes"
              />
              <CollectionCarouselComponent
                products={products}
                Title="Carousel"
                dataTitle="Best Carousel"
                isCarousel
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

console.log(process.env.NODE_ENV);

export default App;
