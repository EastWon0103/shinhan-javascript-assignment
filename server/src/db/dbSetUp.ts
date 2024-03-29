import mongoose from 'mongoose';
import dotenv from 'dotenv';

import '../db/comment/commentModel';
import '../db/campaign/campaignModel';

dotenv.config();

const dbSetUp = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
            {
                retryWrites: true,
                w: 'majority',
            }
        );

        console.log('Mongo DB Connected!');
    } catch (_) {
        throw new Error("Can't Connect to DB, Check your env file");
    }
};

export { dbSetUp };
