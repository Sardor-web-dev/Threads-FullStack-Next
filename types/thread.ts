export type Thread = {
  id: string;
  name: string;
  avatar?: string | undefined | null | Blob
  text: string;
  time: string;
  published: boolean;
  likeCount?: number | null;
  comments?: number | null;
  views?: number | null;
  resends?: number | null;
  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string | null ;
  };
};
