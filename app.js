const api = {
    key: "36a2cf5a3d1b26bee14886ae86e1a1f4",
    baseurl: "api.openweathermap.org/data/2.5/"
}
const searchBox =document.querySelector('.search-box');

searchBox.addEventListener('keypress', type)
 function type(e) {
     if (e.keyCode == 13) {
         console.log(search-box.value);
     }
 }