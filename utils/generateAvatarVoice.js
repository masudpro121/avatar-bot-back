require('dotenv').config()
const axios = require("axios");
const fetchAvatarVoice = require('./fetchAvatarVoice');
const did_key = process.env.DID_KEY
module.exports = (prompt) => {
  return new Promise(async (resolve, reject) => {
    const data = {
      source_url:
        "https://i.ibb.co/dc3xdKn/300059891-155636187099896-1529284959877766765-n.jpg",
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
    
  });
};
