import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const ChartSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    { timestamps: true });

const Chart = models.Chart || model('Chart', ChartSchema);

export default Chart;
