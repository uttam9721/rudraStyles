// import mongoose from "mongoose";


// const connectDB=async()=>{
    
//     mongoose.connection.on('connected',()=>{
//         console.log("DB Connected.....");
        
//     })
//     await mongoose.connect(`${process.env.MONGODB_URI}/modexa`)

// }
// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on("connected", () => {
      console.log("✅ DB Connected...");
    });

  } catch (error) {
    console.error("❌ DB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;