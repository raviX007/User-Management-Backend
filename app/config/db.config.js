const dbName = process.env.MONGODB_DEFAULT_DB;
const dbHost = process.env.MONGODB_HOST;

const dbConfig = {
  url: `mongodb://${dbHost}/${dbName}`,
};
export default dbConfig;
