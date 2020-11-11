//access.js

const xhr = new XMLHttpRequest();
xhr.open('GET', 'JSON/access.json', true)
xhr.send();
xhr.responseType = 'text';

    xhr.onload = function(){
        if (xhr.status ===200){
    let myParse = JSON.parse(xhr.responseText)
    console.log(myParse)
    
    let myInfo = "";
    for (i=0; i<myParse.RESPONSE.DETAILS.PEOPLE.PERSON.length; i++){
        let x=i+1;
        myInfo += x+". Firstname= ";
        myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].FIRSTNAME+", ";
        myInfo += "Lastname= ";
        myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].LASTNAME+", ";
        myInfo += "ID= ";
        myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].PERSONID+", ";
        myInfo += "access to: "
        myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].ACCESSLEVELS.ACCESSLEVEL+" <br/>";
        myInfo += "<br/>";
    }
    document.getElementById('info1').innerHTML = myInfo
        }

    }
