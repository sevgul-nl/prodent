import React, { Component } from 'react';
import { Slider as RCSlider, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './style.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);
const style = { width: 400, margin: 20 };

function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return `${v} %`;
}

class Slider extends Component {
  render() {
    return (
      <div className="infoRow">
        <RCSlider onChange={log} reverse min={20} max={60} />
      </div>
    );
  }
}

export default Slider;
