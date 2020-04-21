import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Sample from "../components/Sample";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";

export default () => (
  <Layout>
    <Sample>
      <Banner title="FAR AWAY ROADS" info="GET READT FOR THE MOST DANGAREOUS TRIP OF YOUR LIFE">
        <Link to="/tours" className="btn-white">Press here</Link>
      </Banner>
    </Sample>
    <About />
    <Services />
  </Layout>
)
