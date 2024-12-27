// // module.exports = {
// //     mongoURI: process.env.MONGO_URI,
// //     secretOrKey: process.env.SECRET_OR_KEY
// // };
// module.exports = {
//     mongoURI: process.env.MONGO_URI,
//     secretOrKey: process.env.SECRET_OR_KEY
// };
module.exports = {
    mongoURI: process.env.MONGO_URI, // MongoDB URI from environment variable for production
    secretOrKey: process.env.SECRET_OR_KEY // Secret key from environment variable for production
};
