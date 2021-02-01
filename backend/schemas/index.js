var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function callback(){
    console.log('mongodb connection');
});
require('./coronadaily.js');
//const { MONGO_ID, MONGO_PASSWORD, NODE_ENV} = process.env;
//const MONGO_URL = `mongodb://localhost:27017/project`;

// module.exports = () =>{
//     const connect=()=>{
//         if(NODE_ENV !== 'production'){
//             mongoose.set('debug', true);
//         }
//         mongoose.connect(MONGO_URL, {
//             dbName: 'project',
//         }, (error)=>{
//             if(error){
//                 console.log('MONGODB error', error);
//             } else{
//                 console.log('MONGODB success');
//             }
//         });
//     };
//     connect();

//     mongoose.connection.on('error', (error)=>{
//         console.error('MONGODB error', error);
//     });
//     mongoose.connection.on('disconnected', ()=>{
//         console.error('MONGODB fail. retry');
//         connect();
//     });

//     require('./coronadaily');
// };