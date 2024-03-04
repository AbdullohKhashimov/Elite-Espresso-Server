import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput, LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

/* MemberService modelimizdan memberService dgan object qurib oldik (instance) */
const memberService = new MemberService();
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

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);

    /* input variable hosil qildik. va uni req.body kelayotgan malumotga tenglab oldik */
    const input: LoginInput = req.body;

    /* memberservice objectiga restaurantControllerni processLogin
     * methodini chaqirib undan qaytgan malumotni result degan variable ga tenglashitirib olamz */
    const result = await memberService.processLogin(input);
    // TODO: SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error, getSignup:", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    // kirib kelayotgan malumotni newMember variable ga tenglab olyabmiz
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz
    // va hosil bolgan object orqali processSignup methodini ishlatamiz.
    const result = await memberService.processSignup(newMember);
    // TODO: SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error, getSignup:", err);
    res.send(err);
  }
};

export default restaurantController;
