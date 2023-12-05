export interface Board {
    id: number;
    title: string;
    description: string;
    status: BoardStatus;
}
export declare enum BoardStatus {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}
