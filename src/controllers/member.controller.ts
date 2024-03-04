import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

// React loyihasi uchun
const memberService = new MemberService();
const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    // TODO: TOKENS AUTHENTICATION

    res.json({ member: result });
  } catch (err) {
    console.log("Error, singup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    console.log("body:", req.body);
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    // TODO: TOKENS AUTHENTICATION

    res.json({ member: result });
  } catch (err) {
    console.log("Error, processLogin:", err);
    //res.json({})
  }
};

export default memberController;
