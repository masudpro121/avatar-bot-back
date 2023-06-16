const generateAvatarVoice = require("../../utils/generateAvatarVoice")

module.exports = (req, res) => {
    const {prompt} = req.body
    generateAvatarVoice(prompt)
    .then(result=>{
        res.send(result)
    })
}