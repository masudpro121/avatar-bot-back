require('dotenv').config()
const axios = require("axios");
const fetchAvatarVoice = require('./fetchAvatarVoice');
const did_key = process.env.DID_KEY
module.exports = (prompt, avatar) => {
  return new Promise(async (resolve, reject) => {
    try{
      const data = {
        source_url:avatar,
        script: {
          type: "text",
          input: prompt
        },
      };
  
     const response = await axios.post("https://api.d-id.com/talks", data, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": did_key,
          }
        })
      const result = await fetchAvatarVoice(response.data.id)
      console.log(result.status, 'result generateaivoice');
      if(result.status=="done"){
          resolve(result)
      }else{
          const interval = setInterval(async()=>{
              const result = await fetchAvatarVoice(response.data.id)
              if(result.status == 'done'){
                 resolve(result)
                 console.log('interval');
                 clearInterval(interval)
              }
         },1000)
      }
    }catch(err){
      console.log(err);
    }
    
  });
};
