var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(){
    var entereValue = event.target.value.toUpperCase()

    for(var count=0; count<productList.length; count=count+1)
    {
        var productCount = productList[count].querySelector("p").textContent

        if(productCount.toUpperCase().indexOf(entereValue) < 0){
            productList[count].style.display = "none"
        }
        else{
            productList[count].style.display = "block"
        }
    }
})