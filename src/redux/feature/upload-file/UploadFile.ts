import {khotixsApi} from "@/lib/api";
import {FileType} from "@/lib/types/file/FileType";

export const UploadFile = khotixsApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadFile: builder.mutation<FileType, FormData>({
            query: (data) => ({
                url: '/asset/api/v1/files',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useUploadFileMutation,
} = UploadFile;