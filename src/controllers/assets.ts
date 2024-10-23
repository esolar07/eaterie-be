import {v2 as cloudinary} from 'cloudinary';


export const uploadImageInAssetFolder = async () => {
    const options = {
        public_id: "abc test image",
        folder: "restaurant/abc",
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        await cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", options)
            .then((result) => {
                return  result;
            });
    } catch (error) {
        console.error(error);
    }
};

export const createAssetFolders = async (folderName: string) => {
    try {
        await cloudinary.api.create_folder(`restaurant/${folderName}/assets`)
            .then((result) => {
                return result;
            });
    } catch (error) {
        console.error(error);
        return;
    }
}