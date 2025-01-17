import ProfileComponent from "@/components/customer/User-Profile/Profile";

type PropTypes = {
    params: Promise<{
        id: string
    }>;
};

export default async function ProfilePage(param: PropTypes) {
    const { id } = await param.params;

    return (
        <section>
            <ProfileComponent id={id} />
        </section>
    );
}