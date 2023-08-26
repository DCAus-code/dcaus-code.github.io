<?php
if(isset($_POST['token'])) {
    $token = $_POST['token'];

    // Store the token in a file (user-token.txt)
    file_put_contents('user-token.txt', $token);

    echo "Token stored successfully!";
} else {
    echo "No token received.";
}
?>
