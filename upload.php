<?php
// Define the target directory
$targetDir = "Video and pictures/";

// Get the uploaded file
$targetFile = $targetDir . basename($_FILES["fileUpload"]["name"]);

// Check if the file is valid
if (move_uploaded_file($_FILES["fileUpload"]["tmp_name"], $targetFile)) {
    echo "The file " . htmlspecialchars(basename($_FILES["fileUpload"]["name"])) . " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}
?>