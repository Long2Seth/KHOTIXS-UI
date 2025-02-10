export type QrCodeType = {
    accountId : string;
    acquiringBank : string;
    amount : number;
    userId : string;
    orderId : string;
}

export type OrderResponseType = {
    userId : string;
    orderId : string;
    total : number;
}

export type QrCodeResponseType = {
    data: {
        qr: string;
        md5: string;
    };
    khqrstatus: {
        code: number;
        errorCode: string | null;
        message: string | null;
    };
};
