function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb)

}
function addNewAAField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aaField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aaOb = document.getElementById("aa");
    let aaAddButtonOb = document.getElementById("aaAddButton");

    aaOb.insertBefore(newNode,aaAddButtonOb)

}
function addNewproField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("proField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let proOb = document.getElementById("pro");
    let proAddButtonOb = document.getElementById("proAddButton");

    proOb.insertBefore(newNode,proAddButtonOb)

}
function addNewcertField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("certField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let certOb = document.getElementById("cert");
    let certAddButtonOb = document.getElementById("certAddButton");

    certOb.insertBefore(newNode,certAddButtonOb)

}
// generating resume
function generateRS(){
    let nameField =document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    // direct
    document.getElementById("nameT2").innerHTML=nameField;

  // professional summary
    document.getElementById("profsT").innerHTML=document.getElementById("profsField").value;
    // contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // linkedin
    document.getElementById("linkT").innerHTML=document.getElementById("linkedField").value;

    // github
    document.getElementById("GitT").innerHTML=document.getElementById("gitField").value;

    // professional summary
    // document.getElementById("profsT").innerHTML=document.getElementById("profsField").value;

    // aq
    let aq=document.getElementsByClassName("aqField");
    let str="";

    for(let e of aq){
        str = str +`<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str;

    // aa
    let aa=document.getElementsByClassName("aaField");
    let str1="";

    for(let e of aa){
        str1 = str1 +`<li> ${e.value} </li>`;
    }
    document.getElementById('aaT').innerHTML=str1;

    // project
    let pro=document.getElementsByClassName("proField");
    let str2="";

    for(let e of pro){
        str2 = str2 +`<li> ${e.value} </li>`;
    }
    document.getElementById('proT').innerHTML=str2;

    // certification
    let cert=document.getElementsByClassName("certField");
    let str3="";

    for(let e of cert){
        str3 = str3 +`<li> ${e.value} </li>`;
    }
    document.getElementById('certT').innerHTML=str3;

    // code for setting image

    let file = document.getElementById("imgField").files[0];
    console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    // set the image to template
    reader.onloadend=function(){
        document.getElementById("imgT").src=reader.result;
    }


    document.getElementById('rs-form').style.display='none';
    document.getElementById('rs-template').style.display='block';
}
// print resume
function printRS(){
    window.print();
}