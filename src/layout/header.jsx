import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/carousel/1.jpg"
            alt="First slide"
            height="500px"
          />
          <Carousel.Caption>
            <Link to="/">
              <h1>Tic Tac Toe</h1>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/carousel/2.jpg"
            alt="Second slide"
            height="500px"
          />

          <Carousel.Caption>
            <Link to="/">
              <h1>Tic Tac Toe</h1>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/carousel/3.jpg"
            alt="Third slide"
            height="500px"
          />

          <Carousel.Caption>
            <Link to="/">
              <h1>Tic Tac Toe</h1>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/carousel/4.jpg"
            alt="Third slide"
            height="500px"
          />

          <Carousel.Caption>
            <Link to="/">
              <h1>Tic Tac Toe</h1>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
