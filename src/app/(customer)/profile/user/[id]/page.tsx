import ProfileComponent from "@/components/customer/User-Profile/Profile";

type PropTypes = {
    params: {
        id: string;
    }
}

export default function ProfilePage(param : PropTypes) {

    // const [userProfile, setUserProfile] = useState<Profile | null>(null);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);
    const id = param.params.id;
    console.log(" ID ON PAGE : " + id);
    //
    // console.log(" ID ON DYNA: " + id);
    //
    // const fetchUserProfile = async () => {
    //     await fetch(`http://localhost:8000/user-profile/api/v1/user-profiles/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setUserProfile(data);
    //             console.log(" DATA : " + data);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             setError("An error occurred while fetching the user profile.");
    //             setUserProfile(null);
    //             setLoading(false);
    //         });
    // };
    //
    // useEffect(() => {
    //     fetchUserProfile();
    // }, []);
    //
    // console.log(" USER PROFILE : " + userProfile);
    //

    // useEffect(() => {
    //     const fetchUserProfile = async () => {
    //         try {
    //             const response = await fetch(
    //                 `http://localhost:8000/user-profile/api/v1/user-profiles/${id}`,
    //                 {
    //                     credentials: "include",
    //                 }
    //             );
    //
    //             if (response.ok) {
    //                 const data: UserProfile = await response.json();
    //                 setUserProfile(data);
    //             } else {
    //                 setError("Failed to fetch user profile.");
    //                 setUserProfile(null);
    //             }
    //         } catch (err) {
    //             console.error("Error fetching user profile:", err);
    //             setError("An error occurred while fetching the user profile.");
    //             setUserProfile(null);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchUserProfile();
    // }, []);

    // if (loading) {
    //     return <div><ProfileComponentSkeleton/></div>;
    // }
    //
    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    //
    // if (!userProfile) {
    //     return <div>No user profile found.</div>;
    // }

    return (
        <section>
            <ProfileComponent id={id} />
        </section>
    );
}