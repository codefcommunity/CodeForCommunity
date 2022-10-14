//@ts-ignore
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import connectMongo from "../../../utlis/connect"
// import nanoid from "nanoid";

// /api/User/create
export default async function addUser(req: NextApiRequest, res: NextApiResponse) {
    // connect to mongo
    await connectMongo();
    // create user
    const { name, email, picture, emailVerified, user_id } = req.body;

    if (!name || !email || !picture || !emailVerified || !user_id) {
        return res.status(205).json({ error: "one or more Missing fields" });
    }
    //@ts-ignore
    await User.findOne({ email }, async (err, doc) => {
        if (err) throw err;
        if (doc) {
            // UPDATE USER
            //@ts-ignore
            const time_now = new Date();
            //@ts-ignore
            if ((time_now - doc.lastOnline) > 1000 * 60 * 60 * 24) {
                doc.xp += 100;
            } else {
                doc.xp += 5;
            };
            doc.level = Math.floor(doc.xp / 100);
            doc.lastOnline = time_now;
            await doc.save();
            res.status(200).json({ message: "User Updated" });
            res.send({
                message: "User Updated",
                user: doc,
            })
            res.end();
        }
        if (!doc) {
            const newUser = new User({
                name,
                email,
                picture,
                emailVerified,
                user_id,

            });
            await newUser.save();
            res.status(201).json({ message: "User created" });
            res.send({
                message: "User created",
            })
        }
    });
}
