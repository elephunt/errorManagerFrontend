

export interface ErrorModel {
  code?: string;
  reason?: string;
  status?: string;
  referenceError?: string;
  traceId?: string;
  comments: Comments[];
}


export  interface  Comments {

   score?: number;
   date?: Date;
   _id?: string;
   body: string;
}

