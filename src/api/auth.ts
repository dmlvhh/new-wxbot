import {baseResponse} from "@/api/index";
import {request} from "@/api/request";

export interface LoginReqType {
    username:string
    password:string
    authCode?:string
}
export interface LoginResType {
    token:string
    expire?:string
}
export const LoginApi = (data:LoginReqType): Promise<baseResponse<LoginResType>> => {
    return request.post(`/api/auth/login`,data)
}