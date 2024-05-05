var httpReq=new XMLHttpRequest();
var arr=[];
function getdata(data){
httpReq.open("Get", `https://forkify-api.herokuapp.com/api/search?q=${data}`);
httpReq.send();
httpReq.onreadystatechange =function(){
    if(httpReq.readyState==4){
    arr=JSON.parse(httpReq.response).recipes;
    addToHtml();
    }
}
}
function addToHtml(){
    var str ="";
    for(var i=0;i<arr.length; i++){
      str+=`
      <div class="col-md-3 column-gap-1">
      <div class="card" style="width:16rem;">
      <img src="${arr[i].image_url}" alt="main img" class="img-fluid ">
      <div class="card-body">
        <h2>${arr[i].title}</h2>
        <a href="details.html?rId=${arr[i].recipe_id}" class="main-a bg-secondary text-decoration-none btn">Read More</a>
      </div>
     </div>
      </div>
      `;
    }
   document.getElementById("content").innerHTML =str;


}

var allLinks = document.querySelectorAll(".nav-link");
for(var i=0; i<allLinks.length;i++){
    allLinks[i].addEventListener('click',function(e){
         getdata(e.target.innerHTML);
    })
}

getdata("data"); 
