
var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
  
  interval: 1500,
  wrap: false,


   

})

var myCarousel = document.getElementById('carouselExampleIndicators')

myCarousel.addEventListener('slid.bs.carousel', function () {
  
  var active = $(event.target).find('.carousel-indicators > .indicador.active');
  var from = active.index()
  var next = $(event.relatedTarget);
  var to = next.index();
  
  console.log(to) 
    
  var preto = '#222429'
  var vermelho = '#CE2A50'
  var roxo = '#6B15AC'
  var verde = '#adcc4e'
  var azul = '#3C99D2' 

 

  if(to == 1){ 
  document.getElementById("navbar").style.backgroundColor = vermelho;

  }else if (to == 2){
    document.getElementById("navbar").style.backgroundColor = roxo;
  }else if(to == 3){
    document.getElementById("navbar").style.backgroundColor = verde;
  }else if(to == 4){
    document.getElementById("navbar").style.backgroundColor =azul;
  }else {
    document.getElementById("navbar").style.backgroundColor = preto;
  }
 
})




  
/*
  setInterval(function(){   
    var colors = ["#212429","#CE2A50","#6B15AC","#7ed957","#efd77a"];
    
    var preto = '#212429'
    var vermelho = '#CE2A50'
    var roxo = '#6B15AC'
    var verde = '#7ed957'
    
    var amarelho = '#efd77a'
 
   
         
    document.getElementById("navbar").style.backgroundColor = vermelho;
    
   
    
        

 }, 1000);
  


setInterval(function(){ 
    
    var vermelho = '#CE2A50'
    var verde = '#7ed957'
    var roxo = '#6B15AC'
    var amarelho = '#efd77a'

    document.getElementById("navbar").style.backgroundColor = roxo;

         

}, 2000);


setInterval(function(){ 
        
    var vermelho = '#f14953'
    var roxo = '#6B15AC'
    var amarelho = '#efd77a'
    var verde = '#A1C74B'

    document.getElementById("navbar").style.backgroundColor = verde;
    


}, 3000);


setInterval(function(){ 
        
  var vermelho = '#f14953'
  var azul = '#3C99D2'
  var amarelho = '#efd77a'

  document.getElementById("navbar").style.backgroundColor = azul;


}, 4000);

setInterval(function(){ 
               
  var preto = '#212429'

  document.getElementById("navbar").style.backgroundColor = preto;


}, 5000);





 

*/

$('#carouselExampleIndicators').bind('slide.bs.carousel', function (e) {
  console.log('slide event!');
});

$('#carouselExampleIndicators').bind('slid', function (e) {
  console.log("slid event!");
});