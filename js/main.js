fetch('JSON/random.json')
.then(res => res.json())
.then(data => {
    let myRandom = (data)
    console.log(myRandom)

    let myInfo = ""
    for (i=0; i<myRandom.length; i++) {
        let x=i+1;
        myInfo += x+". Name: "
        myInfo += myRandom[i].first_name+" "
        myInfo += myRandom[i].last_name+", "
        myInfo += "Email: "
        myInfo += myRandom[i].email+", "
        myInfo += "Gender: "
        myInfo += myRandom[i].gender+", "
        myInfo += "IP: "
        myInfo += myRandom[i].ip_address+", "
        myInfo += "Location: "
        myInfo += myRandom[i].location+", "
        myInfo += "ID: "
        myInfo += myRandom[i].id+"<br/> "
        myInfo += "<br/>"
        document.getElementById('info1').innerHTML = myInfo
    }
})
.catch(err => console.error(err));
