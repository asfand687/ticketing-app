import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGO_URI || "")
mongoose.Promise = global.Promise

const ticketSchema =  new Schema(
  {
    active: Boolean,
    category: String,
    description: String,
    priority: Number,
    progress: Number,
    status: String,
    title: String
  },
  {
    timestamps: true
  }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)
export default Ticket