import React from "react";
import Layout from "Layout/Layout";
import HeroContainer from "Shared/Component/Hero/HeroContainer";
import Banner from "Shared/Component/Banner/Banner";

const App = () => (
  <React.Fragment>
    <Layout>
      <HeroContainer />
      <Banner />
    </Layout>
  </React.Fragment>
);

export default App;
