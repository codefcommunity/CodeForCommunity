import { NextApiRequest, NextApiResponse } from "next";
import UserSchema from "../../../models/User";
import connectMongo from "../../../utlis/connect"

// /api/User/create
export default async function addUser(req: NextApiRequest, res: NextApiResponse) {
    // connect to mongo
    await connectMongo();
    // create user
    const { user_id } = req.body;

    if (!user_id) {
        return res.status(400).json({ error: "user_id is not provided by vlient!" });
    }
    //@ts-ignore
    const user = await UserSchema.findOne({ user_id },
        function (err: any, user: any) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(
                    {
                        message: `User found successfully with user_id: ${user_id}`,
                        user: user
                    }
                );
            }
        }

    );
}
