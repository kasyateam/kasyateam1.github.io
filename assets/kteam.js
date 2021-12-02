function getCookie(name){ 
  var matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" )); 
  return matches ? decodeURIComponent(matches[1]) : undefined; 
}


if(window.innerWidth<600){
	window.location.href='https://m.kteam.tk/feed';
}


if(window.location.pathname =='/ban'){
        var tic = new Date();
        document.cookie = "ban=true; max-age=3600"
        document.cookie = "time_ban="+tic+""
        document.getElementById('time').innerHTML = ""+getCookie(time_ban)+"";      
}

/*
if(window.location.pathname !='/index'){
  
  if(getCookie('email') == undefined){
    window.location.pathname ='/index'
  }else{
    window.location.pathname =='/feed'
  }     
}
*/
if((navigator.cookieEnabled === false) && (window.location.pathname != '/ops')){
  window.location.pathname = '/ops'
}else if((navigator.cookieEnabled === true) && (window.location.pathname == '/ops')){ 
  window.location.pathname = '/feed'
}



//шифроывние
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
 }

 //дешифрование
 function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
 }






if(window.location.pathname =='/ban'){
  var tic = new Date();
  document.cookie = "ban=true; max-age=3600"
  document.cookie = "time_ban="+tic+""
  document.getElementById('time').innerHTML = ""+getCookie(time_ban)+"";      
}


if(window.location.pathname =='/activ-link'){
   const date = new Date();
   var a ={}
    a.code_0 = date.getFullYear();
    a.code_1 = date.getDate();
    var code_a = a.code_0+""+a.code_1;
 
    code = utf8_to_b64(code_a);
    document.cookie = "activ="+code+""

    window.location.href = "/activ#"+code+""

    var lik = window.location.hash
    b64_to_utf8((lik.replace('#','')))
}

if(window.location.pathname =='/activ'){
  var lik = window.location.hash
   const date = new Date();
   var a ={}
   a.code_0 = date.getFullYear();
   a.code_1 = date.getDate();
   var code_a = a.code_0+""+a.code_1;


    var ret_1 = b64_to_utf8((lik.replace('#','')))
    var ret_2 = b64_to_utf8(getCookie('activ'))
    if(code_a == ret_1 && code_a == ret_2){
      alert('true')
    }
}
