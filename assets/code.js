function getCookie(name){ 
  var matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" )); 
  return matches ? decodeURIComponent(matches[1]) : undefined; 
}
 
 function reg() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  document.cookie = "name="+name+"";
  document.cookie = "email="+email+"";
  if((document.getElementById('email').value === '') && (document.getElementById('name').value === '')){
    alert("Вы не ввели данных")
  }else{
    window.location.pathname = './feed'
  }

}




function b_load(){
  document.getElementById('name').value = getCookie('name')
  document.getElementById('email').value = getCookie('email')
  
  if(getCookie('email') != undefined){
    document.getElementById('com').innerHTML = "KTeam | Kasya Team 2021"+"<br/>"+getCookie('email')
  }else{
    document.getElementById('com').innerHTML = "KTeam | Kasya Team 2021"
  }



  if(getCookie('email') == undefined && getCookie('name') == undefined){
    document.getElementById('email').value = ""
    document.getElementById('name').value = ""
  }else{
    document.getElementById('email').value = ""+getCookie('email')+""
    document.getElementById('name').value = ""+getCookie('name')+""
  }


}


function as() {
  document.getElementById('cookie_bar').remove();
  document.cookie ="cookie=on";
}

if(getCookie('cookie') == "on"){
  as();
}