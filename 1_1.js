/**
 * Created by pcih1 on 27.10.2016.
 */
class User {
    constructor(_name, _fam, _age,_email) {
        this.name = _name;
        this.fam = _fam;
        this.age = _age;
        this.email= _email;
    }
    toString(){
        return this.name + " " + this.fam + " " + this.age +" "+ this.email;
    }
}
    var arrUser=[];
    var photoMas=[];
    function buttonShowSuckers() {
        clearPage();
        let body=document.body;
        let a="<div>\n";
        for (let i = 0; i< arrUser.length; i++){
            a += "<p>" + "Пользователь " +(i+1)+ ":"  + arrUser[i].toString()+'<img src="' + photoMas[i] + '"><br><br>';
            a+="</div>";
            body.innerHTML=a;
        }
        body.innerHTML+='<button onclick="back()">back</button><br>'
    }
 var keepbody=document.body.innerHTML
    function back(){
        clearPage();
        document.body.innerHTML=keepbody
    }
function clearPage() {
    document.body.innerHTML=""
}
function buttonSuckers() {
    let mas = {};
    var photo = mas.photo;
    mas.name = document.getElementById("name").value;
    mas.fam = document.getElementById("fam").value;
    mas.age = document.getElementById("age").value;
    mas.email = document.getElementById("email").value;
    mas.photo = document.getElementById("photo").value;
   // if (mas.name != "" && mas.fam != "" && mas.age > 0 && mas.age < 156) {
        arrUser.push(new User(mas.name, mas.fam, mas.age, mas.email));
        photoMas.push(mas.photo);
        console.log("User addded");

  //  } else {
    //    console.log("Error");
}