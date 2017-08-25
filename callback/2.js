function modtag(tekst, callback){
    tekst += '<p>' + tekst + '</p>';
    
    callback(tekst);
 }
 function udsend(ptekst){
    console.log(ptekst);
 }

 modtag('text', udsend);