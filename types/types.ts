import { Role, User } from "@prisma/client";

export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
export type SubCategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  categoryId:string
};
export type QuestionProps = {
title:  string;
content:string;
stars?:number;
userId:string;
categoryId:string;
subcategoryId:string
};
export type AnswerProps = {
content:string;
questionId:any;
userId:string
upVotes?:any;
downVotes?:any
};
export type TopicProps = {
title:string;
description:string;
userId:string;
// discussions?: { id: string }[];
};
export type DiscussionProps = {
title:string;
content:string;
attachment:string;
isActive:boolean;
userId:string;
views:number;
topicId:string;
likes:number;
dislikes:number;
};
export type ResponseProps = {
content:string;
userId:string;
discussionId:string
};
export type SavingProps = {
  amount: number;
  month: string;
  name: string;
  userId: string;
  paymentDate: any;
};
export type UserProps = {
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  email: string;
  password: string;
};
export type LoginProps = {
  email: string;
  password: string;
};
export type ForgotPasswordProps = {
  email: string;
};

// types/types.ts

export interface RoleFormData {
  displayName: string;
  description?: string;
  permissions: string[];
}

export interface UserWithRoles extends User {
  roles: Role[];
}

export interface RoleOption {
  label: string;
  value: string;
}

export interface UpdateUserRoleResponse {
  error: string | null;
  status: number;
  data: UserWithRoles | null;
}

export interface RoleResponse {
  id: string;
  displayName: string;
  description?: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}
export type ArticleProps = {
  title:  string;
  content:string;
  likes?:number;
  dislikes?:number;
  Attachment:string;
  isActive:boolean;
  userId:string;
  categoryId:string;
  subcategoryId:string
  };