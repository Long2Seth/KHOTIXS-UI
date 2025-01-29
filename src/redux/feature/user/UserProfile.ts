import {khotixsApi} from "@/lib/api";
import {UserProfileType} from "@/lib/types/customer/userProfile";
import {UserSettingType} from "@/lib/types/customer/userSetting";
import {UpdateUserProfile, UserProfile} from "@/lib/types/navbar/UserProfile";

export const getUserProfile = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<UserProfileType, void>({
            query: () => '/user-profile/api/v1/user-profiles/me',
            providesTags: [{type: 'UserProfile', id: 'LIST'}],
        }),

        logout: builder.mutation<UserProfileType, void>({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            invalidatesTags: [{type: 'UserProfile', id: 'LIST'}],
        }),

        updateUserProfile: builder.mutation<UpdateUserProfile, { data: Partial<UpdateUserProfile> }>({
            query: ({data}) => ({
                url: `/user-profile/api/v1/user-profiles`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: [{type: 'UserProfile', id: 'LIST'}],
        }),
        updateUserPassword: builder.mutation<UserSettingType, { data: Partial<UserSettingType> }>(
            {
                query: ({data}) => ({
                    url: `/identity/api/v1/auths/password/change`,
                    method: 'PUT',
                    body: data,
                }),
            }
        )
    }),
});

export const {
    useGetUserProfileQuery,
    useUpdateUserProfileMutation,
    useUpdateUserPasswordMutation,
    useLogoutMutation,
} = getUserProfile;