// //for localhost
// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "nodecms",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   };

  //for live hosting
  module.exports = {
    HOST: "containers-us-west-184.railway.app",
    USER: "root",
    PASSWORD: "xA70GKhDHh6yM35yDFXF",
    DB: "railway",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };