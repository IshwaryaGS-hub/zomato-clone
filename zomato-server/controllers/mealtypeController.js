import { mealtypeModel } from "../models/mealtypeModel.js";

export function getAllMealtypes(req, res) {
  mealtypeModel
    .find()
    .then((response) => {
      res.json({ message: "Mealtypes fetched succesfully", result: response });
    })
    .catch((er) => console.log(err));
}
