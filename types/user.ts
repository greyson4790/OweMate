interface User {
	id: string
	username: string
	hash: string
	display_name: string 
	created_at: string 
	invoice_ids: string[]
	invoices: InvoiceOrPayment[]
	payment_ids: string[]
	payments: InvoiceOrPayment[]
	connections_ids: string[]
	connections: Connection[]
}
