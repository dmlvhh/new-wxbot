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
    username: string
    password: string
    url: string
    reloginTime: number
    rechargeLink: string
    separationTime: number
    freezeTime: number
}

export const UpdateConfigApi = (data:UpdeateConfigReq): Promise<baseResponse<string>> => {
    return request.post(`/api/updateConfig`,data)
}
export interface RunBotReq {
    switch: boolean
}

export const RunBotApi = (data:RunBotReq): Promise<baseResponse<string>> => {
    return request.post(`/api/runBot`,data)
}
export interface WorkLineType {
    title: string
    compareTime: string
    chartType: string
    diff: number
    increment: boolean
    key: string
    count: number
    workData: WorkDaum[]
}

export interface WorkDaum {
    x: string
    y: number
    name: string
}

export interface AbnormalLineType {
    title: string
    compareTime: string
    chartType: string
    diff: number
    increment: boolean
    key: string
    count: number
    abnormalData: AbnormalDaum[]
}

export interface AbnormalDaum {
    x: string
    y: number
    name: string
}

export const WorkLineApi = (): Promise<baseResponse<WorkLineType>> => {
    return request.post(`/api/workLine`)
}
export const AbnormalLineApi = (): Promise<baseResponse<AbnormalLineType>> => {
    return request.post(`/api/abnormalLine`)
}