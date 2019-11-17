

 const content = document.querySelector(".content");



 content.innerHTML = '';


export  const searchview = (items) =>{


   

    content.innerHTML = '';

    const result = `

    <div class="content__container">
            <div class="content__title">
                <h2>${items.strArtist}</h2>
            </div>
            <div class="content__main">
                <div class="content__cover">
                   <div class="content__img">
                       <img src="${items.strArtistThumb}" alt="Thumbnail" class="thum"> 
                       <span class="overlay">${items.strArtist}</span>              
                        <div class="content__social">
                            <a href="${items.strFacebook ? "https://"+ items.strFacebook : "https://www.facebook.com"}" target="_blank"><img src="./img/facebook.svg" alt="facebook"></a>
                            <a href="${items.strTwitter ?"https://"+ items.strTwitter : "https://www.twitter.com"}" target="_blank"><img src="./img/twitter.svg" alt="Twitter"   ></a>
                            <a href="${items.strWebsite ?"https://"+ items.strWebsite : "https://www.google.com"}" target="_blank"><img src="./img/worldwide.svg" alt="worldwide"></a>
                        </div>
                   </div>
                </div>
    
                <div class="content__items">
    
                    <div class="content__item">
                        <div class="content__header"><img src="./img/vinyl-record.svg" alt=""> <h3>Record Label </h3></div>
                        <p>${items.strLabel ? items.strLabel: "Unknown"}</p>
                    </div>
                    <div class="content__item">
                            <div class="content__header"><img src="./img/musical-note.svg" alt=""> <h3> Style</h3></div>
                        <p>${items.strStyle}</p>
                    </div>
                </div>
                <div class="content__items">
    
                    <div class="content__item">
                        <div class="content__header"><img src="./img/flag.svg" alt=""> <h3 class="content__country">Country </h3></div>
                        <p>${items.strCountry}</p>
                    </div>
                    <div class="content__item">
                            <div class="content__header"><img src="./img/microphone.svg" alt=""> <h3> Genre</h3></div>
                        <p>${items.strGenre}</p>
                    </div>
                </div>
    
    
                <div class="content__bio">
                    <h2>Biography</h2>
                    <p>${items.strBiographyEN}</p>
                </div>
    
            </div>
    
           </div>
    `

    content.insertAdjacentHTML("beforeend", result);


    const cover =  document.querySelector(".content__cover");
    cover.style.backgroundImage = `url(${items.strArtistBanner})`;
}

export  const loader = ()=>{


    content.innerHTML = '';
    const loaderv = `<div class="loader"><img src="./img/Eclipse-1s-200px.svg" alt=""></div>`;
    content.insertAdjacentHTML("beforeend", loaderv)
}

export const clearLoader = () =>{

    const loader = document.querySelector(".loader");
    if(loader) loader.parentElement.removeChild(loader)

}