
//get button.io

    (function () {
        var options = {
            sms: "9034468553", 
            whatsapp: "9034468553",
            call_to_action: "How Can I Help you...?",
            button_color: "#000000",
            position: "right",
            order: "sms,whatsapp",
            pre_filled_message: "Hii, we will get you soon!",
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();


// cursor


var round = document.querySelector(".mouse");
document.addEventListener('mousemove',(e)=>{
   var x = e.pageX;
   var y = e.pageY;
    round.style.left = x  + 'px';
    round.style.top = y + 'px';
});

var anchor = document.querySelector('a');
anchor.addEventListener('mouseover',()=>{
    round.style.height ="70px";
    round.style.width ="70px";
});
anchor.addEventListener('mouseout',()=>{
    round.style.height ="30px";
    round.style.width ="30px";
});

// visit button


var project = document.querySelectorAll('projects');
var visit = document.querySelectorAll('visit-btn');

for(item of project){

    item.addEventListener('mouseover',()=>{
         visit.style.display="block";
    });
}


