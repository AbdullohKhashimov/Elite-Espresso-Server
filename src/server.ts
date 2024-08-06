import dotenv from "dotenv";
// env variable integration
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});
import mongoose from "mongoose";
import server from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succed");
    const PORT = process.env.PORT ?? 3003;
    server.listen(PORT, function () {
      console.info(
        `The server is successfully running on port: ${PORT} http://localhost:${PORT}`
      );
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => {
    console.log("Error on connection MongoDB", err);
  });

/*
  PM2 Commands!

  pm2 ls 
  pm2 start dist/server.js --name=ELITE
  pm2 start "npm run start:prod"  --name=ELITE
  pm2 stop id 
  pm2 delete id
  pm2 restart
  pm2 monit -> monitoring command
  pm2 logs -> by numbers pm2 logs 1
*/
