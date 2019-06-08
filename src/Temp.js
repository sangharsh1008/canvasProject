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
//
export class Temp extends React.Component {
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
  spinnerBall(stage, y) {
    var circle = new createjs.Shape();
    let random = Math.floor(Math.random() * 7);
    circle.graphics.beginFill("red").drawCircle(0, 0, 10);
    circle.x = Math.floor(Math.random() * 400);
    circle.y = y;
    stage.addChild(circle);
    stage.update();
    circle.on("pressmove", function(evt) {
      evt.target.x = evt.stageX;
      evt.target.y = evt.stageY;
    });
    circle.on("pressup", function(evt) {
      console.log("up", evt.target.x);
    });
    //
    stage.update();
  }

  displayBalls() {
    let stage = new createjs.Stage("demoCanvas");
    var rect = new createjs.Shape();
    rect.graphics.beginFill("white").drawRect(0, 0, 500, 500);
    stage.addChild(rect);
    stage.update();

    this.spinnerBall(stage, 490);
    rect.addEventListener("click", function(event) {
      console.log(event.stageX, event.stageY, event);
      alert("clicked");
    });
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
