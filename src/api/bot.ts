import {baseResponse} from "@/api/index";
import {request} from "@/api/request";

export interface GetConfigType {
    username: string
    password: string
    url: string
    reloginTime: number
    rechargeLink: string
    separationTime: number
    freezeTime: number
}

export const GetConfigApi = (): Promise<baseResponse<GetConfigType>> => {
    return request.get(`/api/getConfig`)
}

export interface UpdeateConfigReq {
    UserName: string
    PassWord: string
    Url: string
    ReloginTime: number
    RechargeLink: string
    SeparationTime: number
    FreezeTime: number
}

export const UpdateConfigApi = (data:UpdeateConfigReq): Promise<baseResponse<string>> => {
    return request.post(`/api/updateConfig`,data)
}
export interface RunBotReq {
    Switch: boolean
}

export const RunBotApi = (data:RunBotReq): Promise<baseResponse<string>> => {
    return request.post(`/api/runBot`,data)
}