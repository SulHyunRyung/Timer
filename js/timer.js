let time = 3599;
let minuit = "";
let second = "";

let time_function = setInterval(function(){
   min = parseInt(time/60);
   sec = time%60;
   sec_0fill = sec.toString().length < 2 ? '0' + sec : sec;



   document.querySelector('.time').innerHTML = min + "m " + sec_0fill + "s"
   time--;

   if (time < 0) {
        clearInterval(time_function);
        alert('시간이 초과되었습니다.');
        self.close();
   }
}, 1000);