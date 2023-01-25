import IBaseClient from "./IBaseClient";
import { TwitterApi } from "twitter-api-v2";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export default class DangHoang97 implements IBaseClient {
  initConnection(): TwitterApi {
    const initConnection: any = {
      appKey: process.env.ACCOUNT_2_APP_KEY,
      appSecret: process.env.ACCOUNT_2_APP_SECRET,
      accessToken: process.env.ACCOUNT_2_ACCESS_TOKEN,
      accessSecret: process.env.ACCOUNT_2_ACCESS_SECRET,
    };
    return new TwitterApi(initConnection);
  }
  getBearerToken(): string | undefined {
    return process.env.ACCOUNT_1_BEARER_TOKEN;
  }
  replyContent(): string {
    return "@HoaHa97 @hungdung2292002 @TalaVodich";
  }
}
