// import mongoose from "mongoose";

// export async function connectToPostDB() {
//     try {
//         mongoose.connect(process.env.MONGO_URI_POST+"");
//         const connection = mongoose.connection;

//         connection.on('connected', () => {
//             console.log('MongoDB connected successfully');
//         })

//         connection.on('error', (err: string) => {
//             console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//             process.exit();
//         })

//     } catch (error) {
//         console.log('Something goes wrong!');
//         console.log(error);
        
//     }


// }