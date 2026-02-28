import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Result = {
    __kind__: "error";
    error: string;
} | {
    __kind__: "success";
    success: null;
};
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, email: string, company: string, message: string): Promise<Result>;
}
