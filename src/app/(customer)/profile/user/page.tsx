'use client';
import ProfileComponent from "@/components/customer/User-Profile/Profile";
import { useEffect, useState } from "react";
import {ProfileComponentSkeleton} from "@/components/customer/User-Profile/user/ProfileComponentSkeleton";

type UserProfile = {
    id: string;
    fullName: string;
    gender: string;
    dob: string;
    phoneNumber: string;
    address: string;
    avatar: string;
    status: number;
    position: string;
    email: string;
    businessName: string;
    description: string;
};

export default function ProfilePage() {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_KHOTIXS_URL}/user-profile/api/v1/user-profiles/me`,
                    {
                        credentials: "include",
                    }
                );

                if (response.ok) {
                    const data: UserProfile = await response.json();
                    setUserProfile(data);
                } else {
                    setError("Failed to fetch user profile.");
                    setUserProfile(null);
                }
            } catch (err) {
                console.error("Error fetching user profile:", err);
                setError("An error occurred while fetching the user profile.");
                setUserProfile(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <div><ProfileComponentSkeleton/></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userProfile) {
        return <div>No user profile found.</div>;
    }

    return (
        <section>
            <ProfileComponent userProfile={userProfile} />
        </section>
    );
}