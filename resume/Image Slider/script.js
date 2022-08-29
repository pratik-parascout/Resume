  window.addEventListener("scroll", ()=>{
    const indicatorBar= document.querySelector(".scroll-indicator-bar");
    const pageScroll= document.body.scrollTop || document.documentElement.scrollTop;
    const height= document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue=(pageScroll/height)*100;
    indicatorBar.style.width = scrollValue+"%";
  })


    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
    counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 5000);
