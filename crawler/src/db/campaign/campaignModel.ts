import { Model, Schema, Types, model } from 'mongoose';

interface ICampaign {
    campaignId: Number;
    title: string;
    whenOpen: Date;
    nickname: string;
    achievementRate: number;
    categoryName: string;
    totalBackedAmount: number;
    photoUrl: string;
    coreMessage: string;
}

interface CampaignModel extends Model<ICampaign> {}

const campaignSchema = new Schema<ICampaign, CampaignModel>(
    {
        campaignId: {
            type: Number,
            required: true,
        },
        title: { type: String, required: true },
        whenOpen: { type: Date, default: new Date() },
        nickname: { type: String, required: true },
        achievementRate: { type: Number, required: true },
        categoryName: { type: String, required: true },
        totalBackedAmount: { type: Number, required: true },
        photoUrl: { type: String, required: true },
        coreMessage: { type: String, required: true },
    },
    { timestamps: true, id: true }
);

const Campaign = model<ICampaign, CampaignModel>('campaign', campaignSchema);

export { ICampaign, Campaign };
