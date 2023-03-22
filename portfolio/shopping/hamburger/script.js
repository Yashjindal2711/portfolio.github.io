
    (function () {
        var options = {
            instagram: "officialyash_gupta", // Instagram username
            instagram_color: "#932C8B", // Instagram button color
            whatsapp: "9034468553", // WhatsApp number
            call_to_action: "How Can I Help you...?", // Call to action
            button_color: "#E74339", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "instagram,whatsapp", // Order of buttons
            pre_filled_message: "Hii, we will get you soon!", // WhatsApp pre-filled message
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
