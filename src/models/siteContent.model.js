// Import Mongoose
import mongoose from "mongoose";

// Create Schema
const contentSchema = new mongoose.Schema(
  {
    headerPhoneButton: {
      type: String,
      required: true,
      minLength: [10, "Provide valid number"],
      maxLength: 15,
      match: [/^(\+91[-\s]?)?[6-9]\d{9}$/, "Invalid Indian phone number"]
    },
    heroHeading: { type: String, required: true, minLength: 10, maxLength: 90 },
    heroPara: { type: String, required: true, minLength: 10, maxLength: 90 },
    infoHeading: { type: String, required: true, minLength: 10, maxLength: 90 },
    infoPara: { type: String, required: true, minLength: 10, maxLength: 90 },
    infoPoint1: { type: String, required: true, minLength: 10, maxLength: 45 },
    infoPoint2: { type: String, required: true, minLength: 10, maxLength: 45 },
    infoPoint3: { type: String, required: true, minLength: 10, maxLength: 45 },
    infoPhoneButton: { type: String, required: true, minLength: [10, "Provide valid number"], maxLength: 35 },
    ingredientsHeading: { type: String, required: true, minLength: 10, maxLength: 90 },
    ingredientsPoint1: { type: String, required: true, minLength: 5, maxLength: 45 },
    ingredientsPoint2: { type: String, required: true, minLength: 5, maxLength: 45 },
    ingredientsPoint3: { type: String, required: true, minLength: 5, maxLength: 45 },
    ingredientsPoint4: { type: String, required: true, minLength: 5, maxLength: 45 },
    ingredientsPhoneButton: { type: String, required: true, minLength: [10, "Provide valid number"], maxLength: 35 }
  },
  { timestamps: true }
);

// Create Model
const Content = mongoose.model("Content", contentSchema);

// Export Model
export default Content;