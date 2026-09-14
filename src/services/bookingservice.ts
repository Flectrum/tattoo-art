
// const BASE_URL: string= import.meta.env.VITE_API_BASE_URL;

export interface AddBooking {
    name: string,
    phoneNumber: string;
}

export const bookingService = {

    async sendFormData(formData: AddBooking){
        const response = await fetch('https://long-suns-fix.loca.lt/api/booking', { 
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