import {v2 as cloudinary} from 'cloudinary';


export const uploadImage = async () => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        const result = await cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", options);
        return result.public_id;
    } catch (error) {
        console.error(error);
    }
};