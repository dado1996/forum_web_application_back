import "dotenv/config";

export const environment = {
  port: process.env.PORT!,
  mongo_url: process.env.MONGO_URL!,
};
