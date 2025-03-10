import multer from "multer";
//middleware for image upload
//processes the image and saves it to the server
const upload = multer({ dest: '/temp' });

export default upload;
