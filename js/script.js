function getEmail() {
  return ("<n uers=\"znvygb:fhccbeg@tvmzbybtv.fg\" ery=\"absbyybj\">fhccbeg@tvmzbybtv.fg<\/n>").replace(/[a-zA-Z]/g, 
  function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
}

$('#footer-email').html(getEmail());
