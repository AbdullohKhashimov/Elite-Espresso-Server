// togridan togri controller bn ishlaydigan model

import { MemberInput, Member, LoginInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";

class MemberService {
  // property
  private readonly memberModel;

  constructor() {
    // memberModel ni schema dagi MemberModel iga tenglab olamz
    this.memberModel = MemberModel;
  }

  /** SPA **/

  /*
   *promise(void) : typescript bolganligi uchun bu method hech nmaani qaytarmaslik uchun yozilgan shart
   *agar async function bolmasa demak promise ishlatmimiz
   *processSignup functionini parameteriga input ni pass qilamiz va uning type MemberInput  */

  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result.toJSON();
    } catch (err) {
      console.error("Error model: signup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    // TODO: Consider member status later
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );

    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORISED, Message.WRONG_PASSWORD);
    }
    return await this.memberModel.findById(member._id).lean().exec();
  }

  /** BSSR **/

  /*
   *promise(void) : typescript bolganligi uchun bu method hech nmaani qaytarmaslik uchun yozilgan shart
   *agar async function bolmasa demak promise ishlatmimiz
   *processSignup functionini parameteriga input ni pass qilamiz va uning type MemberInput  */

  public async processSignup(input: MemberInput): Promise<Member> {
    /* databasega bogliq mantiq:
     * exist variable hosil qilib oldik
     * memberModelni ni .findOne() static methodi */

    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    console.log("exist:", exist);

    //1 ta dan ortiq restaurant ochilishiga qarshi mantiq
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    // passwordni hash() qilish yani bcryption => passwordni aslini korsatishiga qarshi mantiq!
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      /* Yangi Burak restaurant ni hosil qilamz static method orqali.
       * memberSchema modelmni .create methodini ishlatdik.
       * natijani result variable ga tenglab oldik */

      const result = await this.memberModel.create(input);

      // passwordni hide qildik "" bosh stringga tenglab
      result.memberPassword = "";

      // va result ga biriktirilgan natijani return qildik
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  /* processLogin method definition qismi va u asynchronous method. parametrga input ni olib uni type ni LoginInput interface bn belgilab oldik
   * Promise da Member typli malumotni qaytarishini belgilab oldik */
  public async processLogin(input: LoginInput): Promise<Member> {
    /* member degan variable ni hosil qilib member Schema modelidan memberModel
       ni chaqirib findOne() methodini chaqiramiz */
    const member = await this.memberModel
      .findOne(
        // Query condition: database dan qanday malumotni izlashni belgilab olyabmz
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );

    // database dagi passwordni solishtirish yani hato kiritsa hato yuboradi togri password kirgizsa login qiladi
    /* const isMatch = input.memberPassword === member.memberPassword; */

    // agar password notogri bolsa hato qaytarishligi
    if (!isMatch)
      throw new Errors(HttpCode.UNAUTHORISED, Message.WRONG_PASSWORD);

    // yana schema modelga murojat qilib kiritilgan malumotlar togri bolsa memberId bn topib bizga result ni qaytarb beradi
    return await this.memberModel.findById(member._id).exec();
  }
}

export default MemberService;
