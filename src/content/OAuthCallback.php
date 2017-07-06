<?php

   $url_link='';
   $callback_url='';
   foreach ($_GET as $key => $value)
   {
      $key = htmlspecialchars( $key );
      $value = htmlspecialchars( $value );
      if ($key == 'callback_url') {
          $callback_url=$value;
      } else {
      	  $url_link .= "{$key}={$value}&";
      }
   }
   header( 'Location: '.$callback_url.'?'.$url_link) ;

?>
