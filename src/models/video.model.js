import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema= new Schema({
 videoFile:{
    type:String, //cloudinary
    required : true,
 },
 thumbnail: {
    type: String, 
    required : true,

 },
 title: {
    type: String, 
    required : true,

 },
 description: {
    type: String, 
    required : true,

 },
 duaration: {
    type: Number,  // extracted from cloudinary
    required : true,

 },
 view: {
    type: Number, 
   default :0,
 },
 isPublished: {
  type: Boolean ,
  default: true

 },
 owner :{
    type: Schema.Types.ObjectId,
    ref: "User",
 }

},

{
 timestamps: true,   
}
)
export const Video = mongoose.model("Video",videoSchema)