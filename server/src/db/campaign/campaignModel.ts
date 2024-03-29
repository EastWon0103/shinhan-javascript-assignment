import { Model, Schema, Types, model } from 'mongoose';

interface ICampaign {
    id: Types.ObjectId;
    campaignId: number; // Wadiz Id;
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
        campaignId: { type: Number, required: true, index: true, unique: true },
        title: { type: String, required: true },
        whenOpen: { type: Date, required: true },
        nickname: { type: String, required: true },
        achievementRate: { type: Number, required: true },
        categoryName: { type: String, required: true },
        totalBackedAmount: { type: Number, required: true },
        photoUrl: { type: String, required: true },
        coreMessage: { type: String, required: true },
    },
    { timestamps: true }
);

campaignSchema.virtual('comments', {
    localField: 'campaignId',
    ref: 'comment',
    foreignField: 'campaign',
});

campaignSchema.set('toObject', { virtuals: true });
campaignSchema.set('toJSON', { virtuals: true });

const Campaign = model<ICampaign, CampaignModel>('campaign', campaignSchema);

export { ICampaign, Campaign };
