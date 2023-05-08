import UserModel from "./UserModel";

export const getUser = async (req: any, res: any) => {
  try {
    const { _id } = req.body;
    const user = await UserModel.findById(_id);
    if (!user) throw new Error("no user found");
    res.send(user);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

