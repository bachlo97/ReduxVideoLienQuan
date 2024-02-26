import React, { Component } from "react";
import classes from "./style.module.css";
import { connect } from "react-redux";
class ModelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contain: "/img/dressingRoom/background_998.jpg",
      body: "/img/dressingRoom/bodynew.png",
      model: "/img/dressingRoom/1000new.png",
      bikinitop: "/img/dressingRoom/bikini_branew.png",
      bikinibottom: "/img/dressingRoom/bikini_pantsnew.png",
      feetleft: "/img/dressingRoom/feet_high_leftnew.png",
      feetright: "/img/dressingRoom/feet_high_rightnew.png",
    };
  }
  render() {
    return (
      <div
        className={classes.contain}
        style={{ background: `url(${this.state.contain})` }}
      >
        <div
          className={classes.body}
          style={{ background: `url(${this.state.body})` }}
        ></div>
        <div
          className={classes.model}
          style={{ background: `url(${this.state.model})` }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{ background: `url(${this.state.bikinitop})` }}
        ></div>
        <div
          className={classes.bikinibottom}
          style={{ background: `url(${this.state.bikinibottom})` }}
        ></div>
        <div
          className={classes.feetleft}
          style={{ background: `url(${this.state.feetleft})` }}
        ></div>
        <div
          className={classes.feetright}
          style={{ backgroundImage: `url(${this.state.feetright})` }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{ backgroundImage: `url(${this.props.topclothes})`, backgroundSize: 'cover' }}
        ></div>
        <div
          className={classes.contain}
          style={{ backgroundImage: `url(${this.props.background})`, backgroundSize: 'cover' }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{ backgroundImage: `url(${this.props.botclothes})`, backgroundSize: 'cover' }}
        ></div>

        <div
          className={classes.bikinitop}
          style={{ backgroundImage: `url(${this.props.shoes})`, backgroundSize: 'cover' }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{ backgroundImage: `url(${this.props.handbags})`, backgroundSize: 'cover' }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{ backgroundImage: `url(${this.props.necklaces})`, backgroundSize: 'cover' }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{ backgroundImage: `url(${this.props.hairstyle})`, backgroundSize: 'cover',top:'-5%',left:'29%',width:'193px',height:'190px' }}
        ></div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topclothes: state.wearClothesReducer.topclothes,
    botclothes: state.wearClothesReducer.botclothes,
    background: state.wearClothesReducer.background,
    shoes: state.wearClothesReducer.shoes,
    handbags: state.wearClothesReducer.handbags,
    necklaces: state.wearClothesReducer.necklaces,
    hairstyle: state.wearClothesReducer.hairstyle,
  }
}
export default connect(mapStateToProps)(ModelComponent)