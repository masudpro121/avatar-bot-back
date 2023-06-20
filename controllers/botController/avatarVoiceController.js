const generateAvatarVoice = require("../../utils/generateAvatarVoice")
const generateChat = require("../../utils/generateChat")

module.exports = async(req, res) => {
    const {prompt, avatar} = req.body
    const chatResult = await generateChat(prompt) 
    generateAvatarVoice(chatResult, avatar)
    .then(result=>{
        res.send({video: result.result_url, text:chatResult})
    })
}