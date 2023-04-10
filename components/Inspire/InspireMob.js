import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./InspireMob.module.css";

export default class InspireMob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className={styles.inspire__mob__wrapper}>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          className="center"
        >
          {this.props?.data?.map((d, index) => (
            <div key={index} className={styles.inspire__monotag}>
              <span>0{d?.id}</span>
              <h3>{d?.title}</h3>
            </div>
          ))}
        </Slider>

        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props?.data?.map((d, index) => (
            <div key={index} className={styles.inspire__slider__card}>
              <div className={styles.inspire__slider__image}>
                <Image
                  src={d?.image}
                  fill="true"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className={styles.inspire__slider__content}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: d?.head,
                  }}
                ></h2>
                <p>{d?.long}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
