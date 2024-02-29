import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    // kirib kelayotgan malumotni newMember variable ga tenglab olyabmiz
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    // MemberService class dan instance olib memberService variable ga tenglashtirib olyapmiz
    const memberService = new MemberService();
    // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz
    // va hosil bolgan object orqali processSignup methodini ishlatamiz.
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.log("Error, getSignup:", err);
    res.send(err);
  }
};

export default restaurantController;
