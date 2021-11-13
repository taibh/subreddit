export interface Thread {
  id: string;
  title: string;
  author: string;
  numberOfComments: number;
  createdAt: number;
  content?: string;
}

export interface ThreadResponse {
  after: string;
  threads: Thread[];
}
