import {v2 as cloudinary} from 'cloudinary';
import {array} from "yup";


export const uploadImageInAssetFolder = async ( imageUploadDetails, foldername ) => {
    const options = {
        folder: `restaurants/${foldername}/assets`,
        display_name: `tester`,
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        const uploadImage = await cloudinary.uploader.upload(imageUploadDetails, options);
        if (uploadImage !== undefined) {
            return uploadImage
        }
        return false
    } catch (error) {
        console.error(error);
        return error
    }
};

export const createAssetFolders = async (folderName: string) => {
    try {
       const assetFolder =  await cloudinary.api.create_folder(`restaurants/${folderName}/assets`);
       if(assetFolder !== undefined) {
           return assetFolder;
       }
       return false
    } catch (error) {
        console.error(error);
        return;
    }
}