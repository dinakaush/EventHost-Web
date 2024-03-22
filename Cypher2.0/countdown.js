(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "March 13, 2024 23:59:59",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

            if (distance < 0) {
              // let headline = document.getElementById("headline"),
              //     countdown = document.getElementById("countdown"),
              //     content = document.getElementById("content");
    
              // headline.innerText = "It's my birthday!";
              // countdown.style.display = "none";
              // content.style.display = "block";
    
              // clearInterval(x);
                   document.getElementById("days").innerText ="00",
          document.getElementById("hours").innerText = "00",
          document.getElementById("minutes").innerText = "00",
          document.getElementById("seconds").innerText = "00";
    
            }
          
              
            else{
        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
            }
        //seconds
      }, 0)
  }());