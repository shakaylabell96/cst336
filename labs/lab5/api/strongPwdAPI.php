<?php

//echo "topS3cr3t!";

//$lettersArray = array("a", "b", "c"...);

$lettersArray = range("a","z");

//print_r($lettersArray); //displays all elements in an Array, for debugging purposes

$password = "";

for ($i = 0; $i < 8; $i++) {
    $randomIndex = rand(0,25); //generates random number from 0 to 25, inclusive
    $password = $password . $lettersArray[$randomIndex ]; //Use a DOT to concatanate strings
    //$password .=  $lettersArray[$randomIndex ]; /
}

$password[0] = rand(0,9);
$password = str_shuffle($password); //shuffles the letters of the password
//echo $password;



$data = array();
$data["suggestedPwd"] = $password;

echo json_encode($data);

?>

