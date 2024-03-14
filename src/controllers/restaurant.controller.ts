import { T } from "../libs/types/common";
import { NextFunction, Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput, LoginInput, AdminRequest } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

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
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, getSignup:", err);
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin:", err);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignup");

    /* kirib kelayotgan request body ni newMember 
    constantasiga tenglab olyabmiz va uning type MemberInput interface */
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);

    // SESSIONS AUTHENTICATION
    req.session.member = result;

    /* Sessionlarimiz muvofaqqiyatli saqlangach browserdagi cookieni ichiga sid ni
     * joylaydi va session collectionga memnber datani borib joylaydi  */
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/signup") </script>`
    );
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
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/login") </script>`
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error,logout:", err);
    res.redirect("/admin");
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
    else res.send(`<script> alert("${Message.NOTAUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("Error,checkAuthSession:", err);
    res.send(err);
  }
};

// murojatchi kim ekanligini aniqlab beradi
// va restaurant user kim ekanligini aniqlab beradi.
// middleware
restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
  // next() function ishlatilishi kerak agar ishlatilmasa request osilib qoladi
) => {
  // requestni ichidagi sessiondagi member kimligi va uni type Restaurant ekanligini aniqlab beradi
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOTAUTHENTICATED;
    res.send(
      `<script>alert("${message}"); window.location.replace('/admin/login');</script>`
    );
  }
};

export default restaurantController;
