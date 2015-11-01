---
layout: default
permalink: /sent/
---

<?php
 
if(isset($_POST['email'])) {
    $email_to = "ut.canoe@gmail.com";
    $email_subject = "Message from canoe.skule.ca/contact/: ";

    function objection($error) {
        echo "<br />";
        echo $error;
        echo '<br /><a href="/contact/" class="btn btn-theme">Go Back</a><br />';
        die();
    }

    // Check if all the fields are filled
    if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])) {
        objection('Sorry man...you were missing something.<br/>');
    }
    $var_name = $_POST['name'];
    $var_email = $_POST['email'];
    $var_subject = $_POST['subject'];
    $var_message = $_POST['message'];
    $var_error = "";

    // check for shits
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$var_email)) { $var_error .= 'Y U NO email?<br />';}
    $string_exp = "/^[A-Za-z .'-]+$/";
    if(!preg_match($string_exp,$var_name)) { $var_error .= 'Y U NO name?<br />';}
    if(strlen($var_subject) < 2) { $var_error .= 'Y U NO subject line?<br />';}
    if(strlen($var_message) < 2) { $var_error .= 'Y U NO message?<br />';}

    // Oh noes something happened
    if(strlen($error_message) > 0) { objection($error_message); }
 
    // We good here
    $email_message = "This email was generated from canoe.skule.ca/contact/ via php remote.\nPlease report any problems to the current Webmaster (Henry Lu [2015-2016 year])\n\n\n\n\n\n";
 
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
    $email_subject .= clean_string($var_subject);
    $email_message .= "Hi! My name is [ ".clean_string($var_name);
    $email_message .= " ] and my email is [ ".clean_string($var_email);
    $email_message .= " ]. Here is what I have to say: \n\n ".clean_string($var_message)."\n\n\n";
    
    // create email headers
    $headers = 'From: '.$var_email."\r\n". 
    'Reply-To: '.$var_email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
<div class="container mtb">
    <div class="row">
        <div class="col-lg-6 col-lg-offset-3">
            <h4>Message Bottle Sent!</h4>
            <p>When it drifts ashore to our inbox bay, we'll get one of our (constantly tired) execs to respond as quickly as possible. So don't go all Lord of the Flies on us before then.</p>
            <p><br/><a href="/contact/" class="btn btn-theme">Go Back</a></p>
        </div>
    </div>
</div>

<?php
 
}

?>