// togridan togri controller bn ishlaydigan model

import { MemberInput, Member } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
  // property
  private readonly memberModel;

  constructor() {
    // memberModel ni schema dagi MemberModel iga tenglab olamz
    this.memberModel = MemberModel;
  }

  // promise(void) : typescript bolganligi uchun bu method hech nmaani qaytarmaslik uchun yozilgan shart
  // agar async function bolmasa demak promise ishlatmimiz
  // processSignup functionini parameteriga input ni pass qilamiz va uning type MemberInput

  public async processSignup(input: MemberInput): Promise<Member> {
    // databasega bogliq mantiq:
    // exist variable hosil qilib oldik
    // memberModelni ni .findOne() static methodi
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    console.log("exist:", exist);

    //1 ta dan ortiq restaurant ochilishiga qarshi mantiq
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    try {
      // Yangi Burak restaurant ni hosil qilamz static method orqali.
      // memberSchema modelmni .create methodini ishlatdik.
      // natijani result variable ga tenglab oldik
      const result = await this.memberModel.create(input);

      // passwordni hide qildik "" bosh stringga tenglab
      result.memberPassword = "";

      // va result ga biriktirilgan natijani return qildik
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default MemberService;
