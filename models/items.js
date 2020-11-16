const  mongoose = require("mongoose")
const Schema = mongoose.Schema;
const  Comment = require("./Comment")


const itemSchema = new Schema({
    name: { type: String },
    imgurl: { type: String },
    comments: [{
      type:Schema.Types.ObjectId,
      ref: Comment
    }]
  });
const Item = mongoose.model("Item", itemSchema);


// Item.create({name:"Chocoshakes", imgurl:"https://www.thechocolateroomindia.com/dist/img/product/product-3.jpg"},(err, choc)=>{
//   if(err){
//     console.log(err)
//   }else console.log(choc)
// });
// Item.create({name:"Choco", imgurl:"https://www.thechocolateroomindia.com/dist/img/product/product-12.jpg"},(err, choc)=>{
//   if(err){
//     console.log(err)
//   }else console.log(choc)
// });
// Item.create({name:"Thank god Its Sundae", imgurl:"https://www.thechocolateroomindia.com/dist/img/product/product-13.jpg"}, (err, choc)=>{
//   if(err){
//     console.log(err)
//   }else console.log(choc)
// });
// Item.create({name:"Chocotails", imgurl:"https://www.thechocolateroomindia.com/dist/img/product/product-14.jpg"},(err, choc)=>{
//   if(err){
//     console.log(err)
//   }else console.log(choc)
// });
module.exports = Item;