import React from "react";
// import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import line from "../../../asset/images/Group 70.svg";

const Carousels = (props) => {
  const Display = () => {
    if (props.img) {
      let imgs = [];
      props.img.map((img) => {
        return imgs.push(img);
      });
      return (
        <Carousel className="Caro">
          <Carousel.Item>
            <img className="d-block Caro-c" src={imgs[0]} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block Caro-c" src={imgs[1]} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block Caro-c" src={imgs[2]} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      );
    } else {
      let words = [];
      let heads = [];
      props.word.map((word) => {
        props.head.map((head) => {
          return heads.push(head);
        });
        return words.push(word);
      });
      return (
        <Carousel className="Caro-blue">
          <Carousel.Item>
            <div className="row wl">
              <div className="word-body col-sm-8 col-md-8">
                <h1 className="head"> {heads[0]} </h1>
                <p className="word"> {words[0]} </p>
              </div>
              <div className="line col-sm-3 col-md-3">
                <img src={line} alt="line" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row wl">
              <div className="word-body col-sm-8 col-md-8">
                <h1 className="head"> {heads[1]} </h1>
                <p className="word"> {words[1]} </p>
              </div>
              <div className="line col-sm-3 col-md-3">
                <img src={line} alt="line" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row wl">
              <div className="word-body col-sm-8 col-md-8">
                <h1 className="head"> {heads[2]} </h1>
                <p className="word"> {words[2]} </p>
              </div>
              <div className="line col-sm-3 col-md-3">
                <img src={line} alt="line" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      );
    }
  };

  return (
    <div className="Carousel-box">
      <Display />
    </div>
  );
};

export default Carousels;
