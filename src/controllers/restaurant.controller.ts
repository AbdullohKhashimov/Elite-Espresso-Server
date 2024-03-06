import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput, LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { AdminRequest } from "../libs/types/member";
import { Message } from "../libs/Errors";

/* MemberService modelimizdan memberService dgan object qurib oldik (instance) */
const memberService = new MemberService();
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
    // res=> send | json | redirect | end | render
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    // kirib kelayotgan malumotni newMember variable ga tenglab olyabmiz
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz
    // va hosil bolgan object orqali processSignup methodini ishlatamiz.
    const result = await memberService.processSignup(newMember);

    // SESSIONS AUTHENTICATION
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);

    /* input variable hosil qildik. va uni req.body kelayotgan malumotga tenglab oldik */
    const input: LoginInput = req.body;

    /* memberservice objectiga restaurantControllerni processLogin
     * methodini chaqirib undan qaytgan malumotni result degan variable ga tenglashitirib olamz */
    const result = await memberService.processLogin(input);

    //  SESSIONS AUTHENTICATION
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error,processLogin:", err);
    res.send(err);
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member)
      res.send(
        `<script> alert("Hi ${req.session.member.memberNick}")</script>`
      );
    else res.send(`<script> alert("${Message.NOTAUTHENTICATED}")</script>`);
  } catch (err) {
    console.log("Error,processLogin:", err);
    res.send(err);
  }
};

export default restaurantController;
