import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

export const ProductType = {
    LAPTOP: "laptop",
    MONITOR: "monitor",
    MEJA: "meja",
    KURSI: "kursi",
};

const ProductSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        imageUrl: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        productType: {
            type: String,
            enum: Object.values(ProductType),
            required: true,
        },
    },
    { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;
