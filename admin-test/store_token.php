<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') { if(isset($_POST['token'])) {
    $token = $_POST['token'];

    // Store the token in a file (user-token.txt)
    file_put_contents('user-token.txt', $token);

    echo "Token stored successfully!";
} else {
    echo "No token received.";
}} else {
    header("HTTP/1.1 405 Method Not Allowed");
    header("Allow: POST");
    echo "Only POST requests are allowed.";
}
?>
