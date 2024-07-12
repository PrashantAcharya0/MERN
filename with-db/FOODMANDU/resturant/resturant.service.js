import mongoose from "mongoose";
import Resturant from "./resturant.model.js";
import Yup from "yup";

export const validateMongoIdFromParams = (req, res, next) => {
  // extract resturant id from req.params
  const id = req.params.id;

  // check for mongo id validity
  const isValidId = mongoose.isValidObjectId(id);

  // if not valid mongo id, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid mongo id." });
  }

  next();
};

export const deleteResturant = async (req, res) => {
  // extract resturant id from req.params
  const resturantId = req.params.id;

  // find resturant
  const requiredResturant = await Resturant.findById(resturantId);

  // if not resturant, throw error
  if (!requiredResturant) {
    return res.status(404).send({ message: "Resturant does not exist." });
  }

  // delete resturant
  await Resturant.findByIdAndDelete(resturantId);

  // send res
  return res
    .status(200)
    .send({ message: "Resturant is deleted successfully." });
};

export const validateResturantData = async (req, res, next) => {
  const resturantValidationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required.")
      .trim()
      .max(55, "Name must be at most 55 characters.")
      .lowercase(),
    contact: Yup.string().required().trim().min(10).max(15),
    location: Yup.string().trim().required().max(55),
    ownerName: Yup.string().max(55).default(null).nullable(),
  });

  try {
    const validatedData = await resturantValidationSchema.validate(req.body);
    req.body = validatedData;
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};

export const addResturant = async (req, res) => {
  //  extract new values  from req.body
  const newResturant = req.body;

  // insert into db
  await Resturant.create(newResturant);

  return res.status(201).send({ message: "Resturant is added successfully." });
};
