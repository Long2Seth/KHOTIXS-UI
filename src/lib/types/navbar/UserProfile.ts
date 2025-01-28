export type UserProfile = {
    id: string;
    username: string;
    fullName: string;
    gender: string;
    dob: string;
    bio: string;
    phoneNumber: string;
    address: string;
    avatar: string;
    status: number;
    position: string;
    email: string;
    businessName: string;
}

export type UpdateUserProfile = {
    fullName: string,
    gender: string,
    dob: string,
    phoneNumber: string,
    address: string,
    avatar: string,
    status: number,
    position: string,
    businessName: string
}