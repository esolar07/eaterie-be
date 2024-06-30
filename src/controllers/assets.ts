import {v2 as cloudinary} from 'cloudinary';


export const uploadImage = async (req, res) => {
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
                return res.json({ message: 'Restaurant asset uploaded successfully', data: result});
            });
    } catch (error) {
        console.error(error);
    }
};

export const createAssetFolders = async (req, res) => {
    try {
        await cloudinary.api.create_folder("restaurant/abc")
            .then((result) => {
                return res.json({ message: 'Restaurant asset folder created successfully', result});
            });
    } catch (error) {
        console.error(error);
    }
}