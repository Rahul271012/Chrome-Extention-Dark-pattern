
    
document.addEventListener('DOMContentLoaded', function () {
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
var url = tabs[0].url;
const search_button =document.querySelector('#search_button');
search_button.addEventListener('click' , (e)=>{
document.querySelector("#url-container").style.display = "block";
document.getElementById('url-text').textContent = url;


});
 });
 });

 



  