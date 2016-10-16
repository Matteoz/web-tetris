var Cookies = {

    setCookie: function (name, value, expires, path, domain, secure) {
        var today = new Date();
        today.setTime(today.getTime());
        if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
        }
        var expires_date = new Date(today.getTime() + (expires));
        document.cookie = name + "=" + escape(value) + ((expires) ? ";expires=" + expires_date.toGMTString() : "") + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ((secure) ? ";secure" : "");

    },


    getCookie: function (name) {
        var i;
        var cookies = document.cookie.split(';');
        var temp_cookie;
        for (i = 0; i < cookies.length; i++) {
            temp_cookie = cookies[i].split('=');
            cookie_name = temp_cookie[0].replace(/^\s+|\s+$/g, '');
            if (cookie_name === name) {
                return unescape(temp_cookie[1].replace(/^\s+|\s+$/g, ''));
            }
        }

        return "";
    },

    deleteCookie: function (name) {
        document.cookie = name + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + "=; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }

};