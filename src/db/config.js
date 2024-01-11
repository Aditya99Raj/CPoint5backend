const mongoose = require("mongoose");
const retry = require('retry');


const DbConnection = async ()=>{
   const operation = retry.operation();
   //  try{
   //     await  mongoose.connect("mongodb+srv://adityaraj9983:quote@cluster0.dnp3zp7.mongodb.net/",
   //     {
   //       useNewUrlParser: true,
   //       // useUnifiedTopology: true,
   //     }
   //     );
   //     console.log("Db connection successful");
   //  }catch(err){
   //     console.log("Db connection failed");
   //  }
   operation.attempt(async () => {
      try {
        await mongoose.connect("mongodb+srv://adityaraj9983:quote@cluster0.dnp3zp7.mongodb.net");
        console.log("Db connection successful");
      } catch (err) {
        console.error("Db connection failed", err);
        operation.retry(err);
      }
    });
}

module.exports = DbConnection;