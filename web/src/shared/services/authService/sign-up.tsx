import { httpClient } from "@/shared/lib/http-client";

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  accessToken: string;
}

export async function signUp(signUpData: SignUpParams) {
  const { data } = await httpClient.post<SignUpResponse>(
    '/auth/signup',
    signUpData
  );

  return data;
}
