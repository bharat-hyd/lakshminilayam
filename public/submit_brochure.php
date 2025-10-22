
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET['count'])) {
//     $file = 'count.txt';
//     $count = file_exists($file) ? (int)file_get_contents($file) : 0;
//     echo json_encode(['total_submit' => $count]);
//     exit;
// }

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"] ?? '';
    $phone = $_POST["phone"] ?? '';
    $email = $_POST["email"] ?? '';
    $pageAddress = $_POST["page_address"] ?? '';
    // $totalSubmit = $_POST["total_submit"] ?? 'N/A';

    // Update counter (simple version using a file)
    $file = 'count.txt';
    $count = file_exists($file) ? (int)file_get_contents($file) : 0;
    file_put_contents($file, $count + 1);

    // Compose email
    
        $file = "form_data.txt";
        
        // Append with file locking
        $fp = fopen($file, "a");
        date_default_timezone_set('Asia/Kolkata');
        $line = date("Y-m-d H:i:s") . " | Count: $count | Name: $name | Phone: $phone | Email: $email | Page: $pageAddress" . PHP_EOL;

        if (flock($fp, LOCK_EX)) { // exclusive lock
            fwrite($fp, $line);
            flock($fp, LOCK_UN);    // release lock
            fclose($fp);
        }



    $message = "
    <html><body>
    <h2>Brochure Request Details</h2>
    <table cellpadding='8' border='1' cellspacing='0'>
      <tr><td><strong>Name</strong></td><td>$name</td></tr>
      <tr><td><strong>Phone</strong></td><td>$phone</td></tr>
      <tr><td><strong>Email</strong></td><td>$email</td></tr>
      <tr><td><strong>Page</strong></td><td>$pageAddress</td></tr>
    </table>
    </body></html>
    ";

    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: bharathteamworks@gmail.com" . "\r\n";

    if (mail("lakshminilayam776@gmail.com", "New Brochure Request from Lakshmi Nilayam", $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Mail sent successfully.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Mail sending failed.']);
    }
    exit;
}

echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
