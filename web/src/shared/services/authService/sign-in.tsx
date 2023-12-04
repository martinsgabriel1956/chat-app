import { httpClient } from "@/shared/lib/http-client"

export interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export async function signIn(signInData: SignInParams) {
  const { data } = await httpClient.post<SignInResponse>(
    '/auth/signin',
    signInData
  );

  return data;
}