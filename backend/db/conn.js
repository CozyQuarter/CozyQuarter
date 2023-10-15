const { MongoClient } = require("mongodb");
const Db = process.env.DORMREVIEWS_DB_URI;
const client = new MongoClient(Db, { useNewUrlParser: true, useUnifiedTopology: true });

 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("reviews");
        console.log("Successfully connected to MongoDB."); 
      } else {
        console.log("Erro connecting to mongodb");
      }
      return callback(err); 
         });
  },
 
  getDb: function () {
    return _db;
  },
};