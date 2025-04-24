
declare type DatabaseProperties = {
    _id: string,
    createdAt: string,
    updatedAt: string
}
declare type SuccesfullResponse<T> = {
    message: 'success'
} & T

declare type ErrorResponse = {
    message: string,
    code: number
}
declare type PaginatedResponse<T>={
   metadata: {
        currentPage: number,
        numberOfPages: number,
        limit: number
    }
}&T

declare type ApiResponse<T> = SuccesfullResponse<T> | ErrorResponse