const browser = {};

(function(browser) {
    var webView = document.getElementById('webContent');
    console.log(webView);
    window.SOME = webView
    browser.loadURL = function () {
        var url = document.getElementById('address').value;

        if (url) {
            if (url.indexOf('www') == -1) {
                url = 'www.' + url;
            }

            if (url.indexOf('http') == -1) {
                url = 'http://' + url;
            }

            webView.loadURL(url);
        }
    };

    document.getElementById('address').addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
            browser.loadURL();
        }
    })
})(browser);