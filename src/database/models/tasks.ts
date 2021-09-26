import { Schema, model, Document } from 'mongoose';

interface Task extends Document {
    title: string;
    description: string;
    status: number;
    user: string;
    createdAt: Date;
    completedAt: Date;

}

const taskSchema = new Schema <Task>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  createdAt: {
    type: Date,
  },
  completedAt: {
    type: Date,

  },
});

export default model <Task>('Task', taskSchema);
