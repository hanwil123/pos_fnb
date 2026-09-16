export interface TableResponse {
    table : TableData
}

export interface TableData {
    id : string
    restaurant_id : string
    table_number : string | null
    qr_token : string
    status : string
    qr_code_image : string
}