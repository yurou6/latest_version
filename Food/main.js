$(function(){
    $("input").on("click",function(){
    //alert("Hi");
    var numberOfListItem = $("li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());
    if(randomChildNumber==0)
        $("img").attr("src","2.jpg");
    else if(randomChildNumber==1)
        $("img").attr("src","1.jpg");
    else 
        $("img").attr("src","3.jpg");
    });
});

    
