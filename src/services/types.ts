export interface RegisterUserInput {
  fullName: string;
  email: string;
  password: string;
  profilePicture?: string;
}

export interface GoogleUserInfo {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}
export enum EmailTemplateEnum {
  Welcome = 1,
  VerifyEmail = 2,
}
