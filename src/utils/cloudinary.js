import dotenv from "dotenv";
dotenv.config(); 

import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadFileOnCloudinary = async (localFileUplaod) => {
    try {
        if (!localFileUplaod) return null;
        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFileUplaod, { resource_type: "auto" })
        //file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFileUplaod) // remove the local uploaded temp file from the server
        console.log("error on cloudinary file uploading", error);

        return null;
    }
}

export { uploadFileOnCloudinary }