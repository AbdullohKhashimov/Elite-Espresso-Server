import { T } from "../libs/types/common";
import { Request, Response } from "express";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
    // res=> send | json | redirect | end | render
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("request success");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    res.send("request success");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

export default restaurantController;
