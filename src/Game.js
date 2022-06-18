import React from "react";
const { createjs } = window;
const colors = [
  "red",
  "demoCanvas",
  "pink",
  "yellow",
  "green",
  "white",
  "white"
];
export class Game extends React.Component {
  displayBallRow(stage, y) {
    for (let i = 1; i <= 18; i++) {
      var circle = new createjs.Shape();
      let random = Math.floor(Math.random() * 7);
      circle.graphics.beginFill(colors[random]).drawCircle(0, 0, 10);
      circle.x = 10 + i * 25;
      circle.y = y;
      stage.addChild(circle);
      stage.update();
    }
  }
  spinnerBall(arr, stage, x, y) {
    let circle = new createjs.Shape();
    let random = Math.floor(Math.random() * 7);
    circle.graphics.beginFill(random).drawCircle(0, 0, 10);
    circle.x = x;
    circle.y = y;
    stage.addChild(circle);
    stage.update();
    arr.push(circle);
    circle.on("pressup", evt => {
      console.log("up", evt.target.x, evt.stageX);
      this.animation(
        circle,
        stage,
        evt.target.x,
        evt.target.y,
        Math.floor(evt.stageX),
        Math.floor(evt.stageY)
      );
    });
  }

  animation(circle, stage, cr_x, cr_y, tr_x, tr_y) {
    console.log(cr_x, cr_y, tr_x, tr_y);

    let ss = createjs.Tween.get(circle, { loop: false });
    ss.to({ x: tr_x, y: tr_y }, 1000);

    if (tr_y >= 250) {
      ss.to({ x: 10, y: tr_y - (500 - tr_y) }, 1000);
      if (tr_x > cr_x) {
        ss.to({ x: 10, y: tr_y }, 1000);
      } else {
        ss.to({ x: 500, y: tr_y }, 1000);
      }
    } else {
      ss.to({ x: cr_x, y: 10 }, 1000);
      if (tr_x > cr_x) {
        ss.to({ x: 10, y: tr_y }, 1000);
      } else {
        ss.to({ x: 500, y: tr_y }, 1000);
      }
    }
    ss.to({ x: cr_x, y: cr_y }, 1000);
    createjs.Ticker.setFPS(500);
    createjs.Ticker.addEventListener("tick", e => {
      stage.update();
    });

    stage.update();
  }

  displayBalls() {
    let stage = new createjs.Stage("demoCanvas");
    var rect = new createjs.Shape();
    rect.graphics.beginFill("white").drawRect(0, 0, 500, 500);
    stage.addChild(rect);
    stage.update();
    let arr = [];
    let x = Math.floor(Math.random() * 400);
    for (let i = 0; i < 2; i++) {
      this.spinnerBall(arr, stage, x + i, 490);
    }
    console.log(arr);

    arr[0].on("pressup", evt => {
      console.log("up", evt.target.x, evt.stageX);
      for (let i = 0; i < 6; i++) {
        this.animation(
          arr[0],
          stage,
          evt.target.x + i * 30,
          evt.target.y + i * 30,
          Math.floor(evt.stageX),
          Math.floor(evt.stageY)
        );
      }
    });
    this.displayBallRow(stage,100)
  }
  componentDidMount() {
    this.displayBalls();
  }

  render() {
    return (
      <div
        style={{
          border: "1px solid #000000",
          width: "500",
          height: "500",
          backgroundColor: "white",
          position: "absolute",
          top: "10px",
          left: "100px"
        }}
      >
        <canvas
          id="demoCanvas"
          style={{
            backgroundColor: "black"
          }}
          width="500"
          height="500"
        />
      </div>
    );
  }
}
