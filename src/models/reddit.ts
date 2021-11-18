export enum FilterTypes {
  HOT = "hot",
  NEW = "new",
  TOP = "top",
}

export interface Thread {
  id: string;
  title: string;
  author: string;
  numberOfComments: number;
  createdAt: number;
  content?: string;
  numberOfVote?: number;
  permalink?: string;
}

export interface ThreadResponse {
  after: string;
  threads: Thread[];
}

export interface ThreadRequestPayload {
  filterType?: FilterTypes;
  after?: string;
  limit?: number;
  isLoadMore?: boolean;
}
