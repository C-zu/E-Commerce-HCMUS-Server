import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://nghia:nghia@se-ecommerce.lkwnlpo.mongodb.net/?retryWrites=true&w=majority&appName=SE-Ecommerce" || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log(connectionString)
} catch(e) {
  console.error(e);
}

let db = conn.db("SE-Ecommerce");

export default db;
