document.getElementById('first').addEventListener('click',function(){
  var desc =document.getElementById('desc');
  //text change
   desc.innerText=
   'First,Lorem ipsum dolor sit amet consectetur, adipisicing elit.Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?';
 
   document.getElementById('art').src="images/1.jpg";
   picCost(750);
  
});

document.getElementById('second').addEventListener('click',function(){
    var desc =document.getElementById('desc');
    //text change
     desc.innerText=
     'Second,Lorem ipsum dolor sit amet consectetur, adipisicing elit.Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?';
    
     document.getElementById('art').src="images/2.jpg";
     picCost(600);
  });

  document.getElementById('third').addEventListener('click',function(){
    var desc =document.getElementById('desc');
    //text change
     desc.innerText=
     'Thirdly,Lorem ipsum dolor sit amet consectetur, adipisicing elit.Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?';
   
     //image change dynamically
     document.getElementById('art').src="images/3.jpg";
     picCost(350);
  });

  /*********** Shipping Charge ***************/

  document.getElementById('free').addEventListener('click',function(){
     const shiping_id = parseInt(document.getElementById('shipping').innerText)
     document.getElementById('shipping').innerText =5;
     TotalBalance(5)
  });
  document.getElementById('express').addEventListener('click',function(){
   const shiping_id = parseInt(document.getElementById('shipping').innerText)
   document.getElementById('shipping').innerText =30;
   TotalBalance(30)
})

function picCost(price){
   document.getElementById('price').innerText =price;
   
   return price;
};
//price
function TotalBalance(shipcost,price){

   var totalid = document.getElementById('total');
   var total_text =totalid.innerText;
   var totalamount = parseInt(total_text);

   const mm = document.getElementById('price').innerText

   const GrandTotal =parseInt(mm)+shipcost;
   totalid.innerText=GrandTotal;
}