import { Schema, model, Document, Types } from "mongoose";

export interface IModule extends Document {
      title: string;
      description: string;
      order: number;
      imgUrl: string;
      chapters: Types.ObjectId[];
}

const moduleSchema = new Schema<IModule>({
      title: { type: String, required: true },
      description: { type: String, required: true },
      order: { type: Number, unique: true },
      imgUrl: { type: String },
      chapters: [{ type: Schema.Types.ObjectId, ref: "Chapter" }],
});

moduleSchema.pre<IModule>("save", async function (next) {
      if (!this.isNew) {
            return next();
      }

      try {
            const lastModule = await Module.findOne().sort({ order: -1 }).limit(1);
            this.order = lastModule ? lastModule.order + 1 : 1;
            next();
      } catch (error: unknown) {
            next(error as Error);
      }
});

const Module = model<IModule>("Module", moduleSchema);
export default Module;
