interface InvoiceOrPayment{
    id: string
    created_by_username: string
    created_by: User
    connection_is: string
    connection: Connection
    amount: number
    created_at: string
}