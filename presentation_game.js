const load_tribe_img = (cnt) => {
    let tribes_guessed = [
        localStorage.getItem("Shoshone"),
        localStorage.getItem("Ute"),
        localStorage.getItem("Navajo"),
        localStorage.getItem("Goshute"),
        localStorage.getItem("Paiute")
    ];
    let all_tribes_guessed = true;
    for (var i = 0; i < 5; i++) {
        if (tribes_guessed[i] == null) {
            all_tribes_guessed = false;
            break;
        }  
    }
    all_tribes_guessed == true ? () => {
        localStorage.setItem("section") = "nation"
        cnt.innerHTML = "<img src='nativelands-tribes_names.jpg'/>"; 
    } : () => {

    };
    

        //<button class="tribe"></button> Shoshome
    //          <button class="tribe"></button> Ute
    //          <button class="tribe"></button> Navajo
    //          <button class="tribe"></button> Goshute
    //          <button class="tribe"></button> Paiute
};

const load_nation_img = (cnt) => {
    alert("Made it to load_nation");
};

const load_btns = (btns) => {

    switch (localStorage.getItem("jg")) {

        default:
            btns.innerHTML += "List of buttons here";
            break;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let cnt = document.getElementById("content");
    let btns = document.getElementById("buttons");
    cnt.innerHTML += "<button id='reset'>Reset vars</button>";
    document.getElementById("reset").addEventListener("click", reset);
    if (localStorage.getItem("section") == null) {
        localStorage.setItem("section", "tribe");
        cnt.innerHTML = "<img src='no_labels.jpg'/>";
    }
    else if (localStorage.getItem("section") == "tribe") {
        load_tribe_img(cnt);
    }
    else if (localStorage.getItem("section") == "nation") {
        load_nation_img(cnt);
    }
    //load_btns(btns,btn_list);
});

const reset = () => {
    localStorage.removeItem("section");
    if (localStorage.getItem("section") == null) {
        console.log("reset suksesful");
    }   
};