var url=window.location;
let params = new URLSearchParams(url.search);
let rId =params.get('rId');
var recipeDetails;

var httpReqest =new XMLHttpRequest();
httpReqest.open("Get",`https://forkify-api.herokuapp.com/api/get?rId=${rId}`);
httpReqest.send();

httpReqest.onreadystatechange= function(){
    if(httpReqest.readyState==4){
       recipeDetails=JSON.parse(httpReqest.response).recipe ;
       addToHtml();
    }
}
function  addToHtml(){
    var str="";
    str+=`
    <h2 class="mt-5">${recipeDetails.title}</h2>
    <p>publisher : ${recipeDetails.publisher}</p>
    <p>social_rank :${recipeDetails.social_rank}</p>
    <img src="${recipeDetails.image_url}" class="img-fluid" alt="the dish img">
    <h3>ingredients</h3>
    `;
    for(var i=0 ;i<recipeDetails.ingredients.length;i++){
     str+=`  
      <ul >
      <li>${recipeDetails.ingredients[i]}</li>
        </ul>`;
    }
    document.getElementById("readMore").innerHTML=str;
}
 
 
 




