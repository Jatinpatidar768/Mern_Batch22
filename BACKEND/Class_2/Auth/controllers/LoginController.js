const User = require("../model/UserModel.js");
const bcrypt = require("bcrypt")
async function Login(req, res) {

    try {

        // data ko nakal lao 
        const { email, password } = req.body;

        if ((email === undefined && password === undefined)) {
            return res.status(403).json({
                success: false,
                message: "email and otp getting undefied"
            })
        }

        if (email === "") {
            return res.status(403).json({
                success: false,
                message: "email can not be empty"
            })
        }


        // validate the data
        if (password === "") {
            return res.status(403).json({
                success: false,
                message: "password cant be empty during the acc verfication"
            })
        }

        // account check karo es email se bna to nhi
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(403).json({
                success: false,
                message: `No account found with this emil id please signup`
            })
        }

        if (userExist.isVerifiedAccount === false) {
            return res.status(403).json({
                success: false,
                message: `Plaese verify your account you got an email where is otp so verify then come!!!!`
            })
        }
        if (await bcrypt.compare(password, userExist?.password)) {
            return res.status(200).json({
                success: true,
                message: "Login Successfully"
            })
        }
        else {
            // user ke response ko return karao taki aap json formate me reqponse dekh sake



            return res.status(403).json({
                success: false,
                message: `password missmatch please enter valid password`
            })
        }



    }
    catch (error) {
        console.log("Verify controller error", error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Verify  me error aa gya hai"
        })
    }

}
module.exports = Login;   // validation
