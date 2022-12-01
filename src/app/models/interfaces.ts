

export interface login{
    "email":String;
    "password":String;
}

export interface postt{
      "title":String;
       "content":String;
       " dateTime": Date;
       "image":String
}

export interface signup{
    "username":string;
    "email":string;
    "password":string;
}

export interface blogger{
    "username":String;
    "email":String;
    "password":String;
    "blogs":[
        {"title":String;
         "content":String;
         "dateTime":Date;
         "image":String;
        }
    ]
}

export interface allblg{
    "username":String;
    "email":String;
    "blogs":[
        {"title":String;
         "content":String;
         "dateTime":Date;
         "image":String;
        }
    ]
}


export interface onlyblg{
    content: string;
    image: String | undefined;
    title: string;
    _id: string;
    "blogs":[
        {"title":String;
         "content":String;
         "dateTime":Date;
         "image":String;
        }
    ]
}

export interface postblg{
   push: any;
   "title":String;
   "content":String;
   "dateTime":Date;
   "image":String;
}