# Project-Stiv Daiu


Implementing an invoice system offers numerous benefits to businesses, including:

Efficiency: Automation of the invoicing process reduces the time and effort required to create, send, and manage invoices. This frees up resources for other critical tasks.

Accuracy: Automated systems minimize human error in calculations and data entry, ensuring that invoices are accurate. This reduces the risk of billing discrepancies and disputes with clients.

Faster Payments: Prompt invoicing encourages quicker payments from clients, improving cash flow and overall financial stability.

Organization: Centralized storage of invoice data allows for easy access and retrieval when needed. This enhances organization and streamlines financial record-keeping.
Overall, implementing an invoice system can streamline operations, improve financial management, and contribute to the overall success and sustainability of a business.


I have build a system  with React and TailwindCSS add items, quantity, prices,vat  and discounts.These are the main function of program.
My project has main 4 components :



InvoiceField.jsx:
It takes two props: onEditItem, which is a function to handle editing of the input field, and cellData, which contains various attributes for configuring the input field (such as className, type, placeholder, min, max, step, name, id, and value).The component renders an <input> element with attributes dynamically set based on the cellData prop. When the input value changes, the onEditItem function is called to handle the change. The required attribute ensures that the input field is required to have a value. This component is likely used in a form for editing invoice data, allowing users to input and edit various details of the invoice.

InvoiceForm.jsx:
It creates a form for inputting invoice details, such as the current date, invoice number, cashier name, customer name, item details, and pricing information.The component calculates subtotal, vat, discount rate, and total based on the items' prices and quantities entered.
InvoiceItem.jsx:
This code defines a React component , which represents a row in the invoice table for displaying and editing item details.This component allows users to view and edit item details within an invoice, providing functionality to delete items as well.

InvoiceModal.jsx:

This code defines a React component, which serves as a modal window for displaying and interacting with invoice details. It utilizes the Transition and Dialog components from the @headlessui/react library for creating the modal.

Tools:
1.React
2.Tailwind CSS
3.Headless UI
4.Html-to-image
5.jsPDF


Instalation:
1.git clone https://github.com/stivdaiu/Project-InvoiceSystem.git
2.cd invoice-generator
3.npm install
4.npm start 
