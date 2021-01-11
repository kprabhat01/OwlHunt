export interface credential {
    email: string,
    passwd: string
}

export interface authenticationResponse {
    Result: string;
    email: string;
    user_id: number;
    accessToken: string;
    user_name: string;
    role_id: number;
}