const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
const travel = require("../models/travelSchema");


// email configuration

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


exports.userregister = async (req, res) => {
    const { fname, email, password } = req.body;
    if (!fname || !email || !password) {
        res.status(400).json({ error: "Please fill the data" })
    }
    try {
        const preuser = await users.findOne({ email: email });

        if (preuser) {
            res.status(400).json({ error: "This User already exist in our Database" })
        } else {
            const userregister = new users({
                fname, email, password
            });
            await userregister.save();

            // here password hashing

            const storeData = await userregister.save();
            res.status(200).json(storeData);

        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};


exports.travelregister = async (req, res) => {
    const { name, groupSize, ageGroup, budget } = req.body;
    if (!name || !groupSize || !ageGroup || !budget) {
        res.status(400).json({ error: "Please fill the data" })
    }
    try {
        const travel = new travel({
            name, groupSize, ageGroup, budget
        });
        
        await travel.save();
        res.status(200).json(travel);
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};






// user send otp

exports.userOtpSend = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Please Enter Your Email" })
    }

    try {
        const preuser = await users.findOne({ email: email });

        if (preuser) {
            const OTP = Math.floor(100000 + Math.random() * 900000);

            const existEmail = await userotp.findOne({ email: email });

            if (existEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true });

                await updateData.save();

                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Email for OTP Validation",
                    text: `OTP:-${OTP}`
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "Email Sending Failed" })
                    } else {
                        console.log("Email Sent", info.response);
                        res.status(200).json({ message: "Email Sent Successfully" })
                    }

                })

            } else {
                const saveOtpData = new userotp({
                    email, otp: OTP
                });
                await saveOtpData.save();
                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Email for OTP Validation",
                    text: `OTP:-${OTP}`
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "Email Sending Failed" })
                    } else {
                        console.log("Email Sent", info.response);
                        res.status(200).json({ message: "Email Sent Successfully" })
                    }

                })
            }
        } else {
            res.status(400).json({ error: "This User Not Exist in our Database" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};

exports.userLogin = async (req, res) => {
    const { email, otp } = req.body;

    if (!otp || !email) {
        res.status(400).json({ error: "Please Enter Your OTP and Email" })
    }

    try {
        const otpverification = await userotp.findOne({ email: email });

        if (otpverification.otp === otp) {
            const preuser = await users.findOne({ email: email });

            // token generate

            const token = await preuser.generateAuthtoken();
            res.status(200).json({ message: "User Login Successfully", userToken: token });

        } else {
            res.status(400).json({ error: "Invalid OTP" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
}



