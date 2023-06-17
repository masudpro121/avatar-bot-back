const generateAvatarVoice = require("../../utils/generateAvatarVoice")
const generateChat = require("../../utils/generateChat")

module.exports = async(req, res) => {
    const {prompt} = req.body
    const chatResult = await generateChat(prompt) 
    generateAvatarVoice(chatResult)
    .then(result=>{
        res.send(result)
    })
}