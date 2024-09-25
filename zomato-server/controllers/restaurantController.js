import { restaurantModel } from "../models/restaurantModel.js";

// Fetch all restaurants details
export function getAllRestaurants(req, res) {
  const { locationId } = req.params;
  restaurantModel
    .find({ city: locationId })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
  //   res.send("success");
}

// Fetch all location details
export function getAllCities(req, res) {
  restaurantModel.find({}, { city: 1, city_name: 1 }).then((resp) => {
    const cities = resp.map((obj) => obj.city);
    const uniquCities = [...new Set(cities)];

    const response = uniquCities.map((cityId) => {
      return resp.find((obj) => obj.city == cityId);
    });
    res.json({ message: "Cities are fetched successfully", result: response });
  });
}

export function filterRestaurants(req, res) {
  let { cityId, mealtypeId, cuisines, lCost, hCost, costForTwo } = req.body;
  // console.log(locationId, mealtype, cuisine, lCost, hCost);
  console.log(req.body);

  let filterObject = {};

  // lCost = lCost == 0 ? 1 : null;
  // hCost = hCost || 1;

  // cuisines = undefined || [];

  let page = 1;
  let resultsPerPage = 3;

  // if (lCost >= hCost) {
  //   res.json({ message: "LOW cost should be lesser than HIGH cost" });
  // }

  // mealtype - constant in filter page
  // locationId - change in fiter page - select one (Dropdown input)
  // cuisine - select multiple (checkbox) -- array
  // L to H (or) H to L [sort by cost] - radio button

  // home page ---
  // location search, food search and mealtypes

  // filter page ---
  // location select, cuisine, low to high and high to low (cost),

  // mealtype [DONE]
  // mealtype and location [DONE]
  // mealtype and cuisine [DONE]
  // mealtype and lcost & hcost [DONE]
  // mealtype and location and cuisine [DONE]
  // mealtype and location and lcost & hcost [DONE]
  // mealtype and cusine and lcost & hcost [DONE]
  // mealtype and location and cuisine and lcost & hcost

  if (mealtypeId) {
    console.log("mealtype only");
    filterObject["type.mealtype"] = mealtypeId;
  }

  if (mealtypeId && cityId) {
    console.log("mealtype and location");
    filterObject["type.mealtype"] = mealtypeId;
    filterObject.city = cityId;
  }

  if (mealtypeId && cuisines.length) {
    console.log("mealtype and cuisine");
    filterObject["type.mealtype"] = mealtypeId;
    filterObject["Cuisine.cuisine"] = { $in: cuisines };
  }

  if (mealtypeId && lCost && hCost) {
    console.log("mealtype and cost");
    filterObject["type.mealtype"] = mealtypeId;
    filterObject.cost = { $lte: hCost, $gte: lCost };
  }

  if (mealtypeId && cityId && cuisines.length) {
    console.log("mealtype, location and cuisine");
    filterObject["type.mealtype"] = mealtypeId;
    filterObject.city = cityId;
    filterObject["Cuisine.cuisine"] = { $in: cuisines };
  }

  if (mealtypeId && cityId && lCost && hCost) {
    console.log("mealtype, location and cost");
    filterObject["type.mealtype"] = mealtypeId;
    filterObject.city = cityId;
    filterObject.cost = { $lte: hCost, $gte: lCost };
  }

  if (mealtypeId && cuisines.length && lCost && hCost) {
    console.log("mealtype, cuisine and cost");
    filterObject["type.mealtype"] = mealtypeId;
    filterObject["Cuisine.cuisine"] = { $in: cuisines };
    filterObject.cost = { $lte: hCost, $gte: lCost };
  }

  if (mealtypeId && cuisines.length && cityId && lCost && hCost) {
    console.log("mealtype, cuisine, location and cost");
    filterObject["type.mealtype"] = mealtypeId;
    filterObject["Cuisine.cuisine"] = { $in: cuisines };
    filterObject.cost = { $lte: hCost, $gte: lCost };
    filterObject.city = cityId;
  }
  console.log(filterObject);

  restaurantModel
    .find(filterObject)
    .sort({ cost: costForTwo == "0" ? 1 : -1 }) // 1 -> ascending; -1 -> descending;
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
}

// Get all cuisines
export function getAllCuisines(req, res) {
  restaurantModel
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
}

export function getRestaurantById(req, res) {
  const { restaurantId } = req.body;
  restaurantModel
    .findById(restaurantId)
    .then((result) => {
      res.json({
        message: "Restaurant details fetched successfully.",
        result: result,
      });
    })
    .catch((err) => console.log(err));
}
