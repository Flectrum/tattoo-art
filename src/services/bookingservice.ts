
// const BASE_URL: string= import.meta.env.VITE_API_BASE_URL;

export interface AddBooking {
    name: string,
    phoneNumber: string;
    contactMethod: string;
    contact: string;
    idea: string;
    style?: string;
    date?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const bookingService = {

    async sendFormData(formData: AddBooking){
        const response = await fetch(`${BASE_URL}/booking`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if(!response.ok) {
            throw new Error("Failed to send data");
        }
        return response;
    }
}