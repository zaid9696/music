import search from  './search';

import {searchview,loader,clearLoader} from './searchView';


const input = document.querySelector("#input");
const form = document.querySelector(".header__form");
const searchButton = document.querySelector("#searchButton");

let inputSearch = input.value;

inputSearch = '';




// Search Controll

const searchControll = async (inputSearch) =>{


    try{

        if(input.value === ''){
            alert("Please Enter Artist Or Band Name");
            return
            
        }

        loader()
       await search(input.value).then(data =>{

            input.value = '';
            if(data.artists === null){
                alert("Please Enter A Correct Name")
                clearLoader()
                return
            }
            clearLoader()
            searchview(data.artists[0]);
            console.log(data.artists[0])
            
        })


    }
    catch(err){

        alert(err)
    }

}




form.addEventListener("submit", (e) =>{

    e.preventDefault()
   
    searchControll()


})

searchButton.addEventListener("click", searchControll)































document.addEventListener("DOMContentLoaded", function() {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options 
    OverlayScrollbars(document.querySelectorAll('body'), { 

        className: "os-theme-thick-light",
    });
});