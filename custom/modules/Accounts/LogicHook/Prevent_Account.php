<?php
class Prevent_AccountClass
{
    function PreventAccountJSFunction ($event, $arguments)
    {
	//echo $GLOBALS['module'];
        if ($GLOBALS['module'] == 'Accounts')
        {
            echo "<script type='text/javascript' src='custom/modules/Accounts/JavaScript/Prevent_Account.js'></script>";
        }
    }

}
?>
