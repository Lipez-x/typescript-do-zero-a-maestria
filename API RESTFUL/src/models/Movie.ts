import mongoose, { Schema, mongo } from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: Schema.Types.String },
    rating: { type: Schema.Types.Number },
    description: { type: Schema.Types.String },
    director: { type: Schema.Types.String },
    stars: { type: Schema.Types.Array },
    poster: { type: Schema.Types.String },
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model("Movie", movieSchema);
