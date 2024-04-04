function get(){
    var user=document.getElementById("name").value;
    var mail=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var confirm=document.getElementById("confirm").value;
    var message=document.getElementById("message");
    message.setAttribute("class","send")
    if(user==""&&mail==""&&pass==""&&confirm==""){
        message.innerHTML="Enter Data Inform"
        return false
    }else if(user.length<5||user.length>15){
    message.innerHTML="Enter 5-15 Char Inform"
    return false
}else if(mail.indexOf("@",5)==-1){
    message.innerHTML="Eter Valid Email"
    return false
}else if(pass.length<8){
    message.innerHTML="Enter Atleast 8 Char In Password"
    return false
}else if(pass!=confirm){
    message.innerHTML="Metching Password"
    return false
}
}