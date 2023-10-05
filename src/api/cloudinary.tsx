import { authenticatedPost } from "./config/calls";
import { checkStatus, formatResponse, postHeaders } from "./config/common";

export const uploadImage = async (image: string) => {
    const finalUrl = `http://api.cloudinary.com/v1_1/dgvsnqsq0/image/upload`;

    const payload = {
        file: image,
        upload_preset: "qwmga9yn"
    }

    const args : RequestInit= {
        method: 'POST',
        headers: postHeaders,
        body: JSON.stringify(payload)
      }

    return await fetch(finalUrl, args)
        .catch(r => {
            throw r;
        })
        .then(formatResponse)
        .catch(error => {
        console.log(
            `Hubo un problema con la petición Fetch a ${finalUrl}. Error: ${error}`,
        );
        throw error;
        });
    
}
