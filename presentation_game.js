let all_tribes_guessed = false;
let tribes_guessed = [
    "Shoshone",
    "Ute",
    "Navajo",
    "Goshute",
    "Paiute"
];

let tribe_lands = {
    "Shoshone": ["8_tribal_nations/shoshone.jpg"],
    "Ute": ["8_tribal_nations/ute_0.jpg", "8_tribal_nations/ute_1.jpg"],
    "Navajo": ["8_tribal_nations/navajo.jpg"],
    "Goshute": ["8_tribal_nations/goshute_0.jpg", "8_tribal_nations/goshute_1.jpg"],
    "Paiute": ["8_tribal_nations/paiute_0.jpg", "8_tribal_nations/paiute_1.jpg"]

}


const load_tribe_img = (cnt) => {
    all_tribes_guessed = true;
    let catch_err = "";
    cnt.innerHTML = "";
    for (var i = 0; i < tribes_guessed.length; i++) {
        try {          //I thought the localStorage item returning null would throw an error, I guess not...  
            catch_err = localStorage.getItem(tribes_guessed[i]);
            if (catch_err == null){
                 all_tribes_guessed = false;
                }
                 else{
                let localImage = `5_tribes/${tribes_guessed[i]}`;
                let loadImage = `<img src='${localImage}.jpg'/>`;
                console.log(`The program will try to find ${localImage} by adding this content: ${loadImage}`);
                cnt.innerHTML += loadImage;                
            }
            }        
        catch (error) {
            all_tribes_guessed = false;
        }
    }
    //If all tribes have been guessed, we graduate to the nation section
    //If some tribes haven't been guessed yet, let's show the map for the tribes that have been guessed
    if (all_tribes_guessed == true){
        localStorage.setItem("section", "nation");
    } else { console.log("not all tribes have been guessed");}
}

const load_nation_img = (cnt) => {
        cnt.innerHTML = "<img src='nativelands-tribes_names.jpg'/>";        
        load_nation_btns();
    };


    const ntn_button_click = (w,q) => {
         let cnt = document.getElementById("content");
         let ntn_img =   tribe_lands[tribes_guessed[w]][q];       
        localStorage.setItem(ntn_img, 'true');
        if (localStorage.getItem("section") == null) {
            localStorage.setItem("section", "tribe");
            cnt.innerHTML += "<img src='no_labels.jpg'/>";
            load_tribe_btns();
        }
    else if (localStorage.getItem("section") == "tribe") {
            load_tribe_img(cnt);
            load_tribe_btns();
    }
    else if (localStorage.getItem("section") == "nation") {
        load_nation_img(cnt);
    }    
        
    };
    
    const tribe_button_click = (tribe) => {
        let cnt = document.getElementById("content");
        localStorage.setItem(tribes_guessed[tribe], 'true');
        if (localStorage.getItem("section") == null) {
            localStorage.setItem("section", "tribe");
            cnt.innerHTML += "<img src='no_labels.jpg'/>";
            load_tribe_btns();
        }
    else if (localStorage.getItem("section") == "tribe") {
            load_tribe_img(cnt);
            load_tribe_btns();
    }
    else if (localStorage.getItem("section") == "nation") {
        load_nation_img(cnt);
    }    
        
    };

    
    const pre_load_btns = ()=>{
        let resetButton = document.getElementById("reset");
        if (resetButton.innerHTML.includes("Reset Program")){
            
        }
        else {
        resetButton.innerHTML += "<button id='reset'>Reset Program</button><br/>";        
        resetButton.addEventListener("click", reset);
        }
        let btns = document.getElementById("buttons");
        btns.innerHTML = "";
        return btns;

    }
    
    const load_nation_btns = ()=>{
        let lands = Object.keys(tribe_lands);
        let btns = pre_load_btns();
        for (let w = 0; w < lands.length; w++) {
            console.log(`\nNumber ${w} is: ${tribe_lands[tribes_guessed[w]]}\n`);
            //Now within How many nation lands each tribe has
            let how_many_lands_per_tribe = tribe_lands[tribes_guessed[w]].length;
            for (let q = 0; q < how_many_lands_per_tribe; q++) {
            if (localStorage.getItem(tribe_lands[tribes_guessed[w]][q]) != 'true'){
                btns.innerHTML += `<button class='tribe' onclick='ntn_button_click(${w},${q})'>${tribe_lands[tribes_guessed[w]][q]}</button>`;
                console.log(`Created ${tribe_lands[tribes_guessed[w]][q]} button.`);
                }
            }
        }
    }
    
    const load_tribe_btns = () => {
        let btns = pre_load_btns();
        for (let x = 0; x < tribes_guessed.length; x++) {
            if (localStorage.getItem(tribes_guessed[x]) != 'true') {
                btns.innerHTML += `<button class='tribe' onclick='tribe_button_click(${x})'>${tribes_guessed[x]}</button>`;
                console.log(`Created ${tribes_guessed[x]} button.`);
            }
            else {                
                console.log(`${tribes_guessed[x]} has the value of 'true'`);
            }
        }
    };
    
    
    const reset = () => {
        localStorage.removeItem("section");
        if (localStorage.getItem("section") == null) {
            console.log("reset suksesful");
        }
        for (let x = 0; x < tribes_guessed.length; x++) {
            localStorage.removeItem(`${tribes_guessed[x]}`);   
        }
        location.reload();
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Current things that aren't working with this program:\nbuttons with tribe names no longer load \nthe variable 'all_tribes_guessed' gets evaluated at the end of load_tribe_img but the code skips over it.");
        let cnt = document.getElementById("content");
        let lands = Object.keys(tribe_lands);
        let count = 0;
        lands.length == tribes_guessed.length ? '' : alert(`Error: tribe_lands.length: ${tribe_lands.length} should have the same amount of keys as tribes_guessed: ${tribes_guessed.length}`);
        //Now let's iterate thru the keys of the dictionary
        for (let w = 0; w < lands.length; w++) {
                console.log(`\nNumber ${w} is: ${tribe_lands[tribes_guessed[w]]}\n`);
            //Now within How many nation lands each tribe has
            let how_many_lands_per_tribe = tribe_lands[tribes_guessed[w]].length;
            console.log(`There are ${how_many_lands_per_tribe} areas that are claimed by ${tribes_guessed[w]}`);
            for (let q = 0; q < how_many_lands_per_tribe; q++) {
                count++;
            }
        }
        count == 8 ? '' : alert(`There are supposed to be 8 tribal lands, not: ${count}`);
        if (localStorage.getItem("section") == null) {
                localStorage.setItem("section", "tribe");
                cnt.innerHTML += "<img src='no_labels.jpg'/>";
                load_tribe_btns();
            }
        else if (localStorage.getItem("section") == "tribe") {
                load_tribe_img(cnt);
                load_tribe_btns();
        }
        else if (localStorage.getItem("section") == "nation") {
            load_nation_img(cnt);
        }        
    });