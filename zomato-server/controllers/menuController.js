import { menuModel } from "../models/menuModel.js";
import { restaurantModel } from "../models/restaurantModel.js";

export function getMenuItemsByRestaurantId(req, res) {
  const { restaurantId } = req.body;
  menuModel
    .find({ restaurantId: restaurantId })
    .then((menuItems) => {
      restaurantModel
        .findById(restaurantId)
        .then((restaurant) => {
          res.json({
            message: "Restaurant details fetched successfully.",
            restaurant: restaurant,
            menuItems: menuItems,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
