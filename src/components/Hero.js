import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = (props) => {
  return (
    <Carousel style={{ width: "100%" }}>
      <Carousel.Item style={{ height: "300px" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="First slide"
        />
        <Carousel.Caption style={{ color: "black" }}>
          <h2>Welcome to Leon's</h2>
          <p>The best place to buy all your music, toys, and games</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "300px" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"
          alt="Second slide"
        />

        <Carousel.Caption style={{ color: "white" }}>
          <h2>PROMOTIONS</h2>
          <p>10% OFF Today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "300px" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1590523277760-06f4e9939d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80"
          alt="Third slide"
        />

        <Carousel.Caption style={{ color: "white" }}>
          <h2>Amazing vacation products</h2>
          <p>Shop and enjoy</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
