const User=require('../models/user.model');


const fetchUserDetails=async(req,res)=>{
  try{
    const {n_id}=req.params;
    const user=await User.findOne({n_id});
    if(!user){
      throw Error('User not found');
  }
  res.status(200).json({success:true,user:user});
}
  catch(error){
    console.error(error);
    res.status(500).json({success:false,message:"Error fetching user details."});
  }
}

module.exports={fetchUserDetails};