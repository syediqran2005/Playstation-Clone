import React, { useRef, useState } from "react";
import { Carousel, Button, Card, Col, Row } from "antd";
const { Meta } = Card;
import products from "./products.js";
import "./productSlider.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const contentStyle = {
  margin: 0,
  width: "100vw",
  height: "90vh",
  lineHeight: "160px",
  textAlign: "center",
  display: "flex",
  position: "relative",
};

const ProductSlider = () => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const [count, setCount] = useState(0);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
    setCount(currentSlide);
  };

  var settings = {
    dots: {
      className: "dots",
    },
    className: "carousel",
  };

  return (
    <div>
      <Carousel {...settings} afterChange={onChange} ref={carouselRef}>
        {products.map((element, index) => {
          return (
            <div key={index}>
              <Row className="product" style={contentStyle}>
                <Col
                  style={{
                    height: "75%",
                  }}
                  span={9}
                >
                  helloguys
                </Col>
                <Col
                  span={15}
                  style={{
                    height: "75%",
                  }}
                >
                  <div style={{height:"100%", width:"100%"}}>
                    <img
                      src={element.image}
                      style={{
                        // width: "inherit",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      alt="image"
                    />
                  </div>
                </Col>
              </Row>
              <div
                style={{
                  height: "20vh",
                }}
              ></div>
            </div>
          );
        })}
      </Carousel>
      <div className="next_prev_btn">
        <Button
          className="next"
          type="primary"
          shape="circle"
          size="large"
          icon={<LeftOutlined />}
          onClick={() => {
            carouselRef.current.prev();
          }}
          hoverable={true}
        />

        <Button
          className="prev"
          type="primary"
          shape="circle"
          size="large"
          icon={<RightOutlined />}
          onClick={() => {
            carouselRef.current.next();
            console.log(sliderRef.current);
          }}
          hoverable={true}
        />
      </div>
      <div className="slider">
        <div className="cards">
          {products.map((element, index) => {
            return (
              <div
                key={index}
                className={count === index ? "contSelected" : "contNotSelected"}
                style={{ textAlign: "center" }}
                ref={sliderRef}
              >
                <Card
                  style={{
                    width: 180,
                    marginLeft: "20px",
                    padding: "5px 5px",
                  }}
                  cover={<img alt="product" src={element.image} />}
                  onClick={() => {
                    carouselRef.current.goTo(element.id);
                  }}
                  className={count === index ? "selected" : "notSelected"}
                  hoverable={true}
                />
                {element.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
