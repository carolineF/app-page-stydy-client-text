function swregister(){
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // navigator.serviceWorker.register('./sw.js').then(function(registration) {
            // // Registration was successful :)
            // console.log('ServiceWorker registration successful with scope: ', registration.scope);
            // }).catch(function(err) {
            // // registration failed :(
            //     console.log('ServiceWorker registration failed with error: ', err);
            // });

            var version = '1.0.1';

            navigator.serviceWorker.register('./sw.js').then(function (reg) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
                if (localStorage.getItem('sw_version') !== version) {
                    reg.update().then(function () {
                        localStorage.setItem('sw_version', version)
                    });
                }
            }).catch(function(err) {
                console.log('ServiceWorker registration failed with error: ', err);
            });

            //降级方案
            /*
            *  chrome 52.0 以下版本不支持getRegistrations meituan Group 是 chrome 40
            */
            // navigator.serviceWorker.getRegistration().then(function(registration){
            //     if(registration){
            //       registration.unregister();
            //     }
            // }).catch(function(evt){

            // });
        })
    }
}

export default swregister
