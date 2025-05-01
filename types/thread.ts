export type Thread = {
  id: string;
  name: string;
  avatar?: string;
  text: string;
  time: string;
  published: boolean;
  likeCount: number;
  comments: number;
  views: number;
  resends: number;
  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
};
