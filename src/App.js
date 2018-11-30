import React from "react";
import Layout from "Component/Template/Layout";
import HeroContainer from "Component/Ressources/Hero/HeroContainer";
import Banner from "Component/Ressources/Banner/Banner";

const App = () => (
  <React.Fragment>
    <Layout>
      <HeroContainer />
      <Banner />
    </Layout>
  </React.Fragment>
);

export default App;
