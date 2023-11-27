/**
 * File Upload Configuration
 * 
 * This module configures multer for handling file uploads. It sets up storage options, file naming conventions,
 * file type filtering, and size limits for uploads.
 * 
 * The storage configuration specifies the destination folder ('uploads/') and filenames (timestamp + original name).
 * The file filter allows only image files to be uploaded, rejecting other file types.
 * The multer instance is configured with these settings and a file size limit of 5 MB.
 * 
 * Dependencies:
 * - multer: Middleware for handling multipart/form-data, primarily used for uploading files.
 * 
 * Exports:
 * - Configured multer instance for use in routes where file uploads are required.
 */

const multer = require('multer');

// Define storage settings for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Set the filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Filter which files are allowed to be uploaded
const fileFilter = (req, file, cb) => {
  // Allow only certain file types (e.g., images)
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed!'), false);
  }
};

// Create multer instance with defined storage and file filter settings
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB file size limit
  },
});

module.exports = upload;
