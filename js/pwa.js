/* Service worker registration + install prompt handling */
(function(){
  window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();window._installEvt=e});
  window.addEventListener('appinstalled',function(){window._installEvt=null;if(window.toast)toast('App installed.')});
  if(!('serviceWorker' in navigator)||!/^https?:$/.test(location.protocol))return;
  window.addEventListener('load',function(){
    navigator.serviceWorker.register('sw.js').then(function(reg){
      reg.addEventListener('updatefound',function(){
        var w=reg.installing;
        if(w)w.addEventListener('statechange',function(){
          if(w.state==='installed'&&navigator.serviceWorker.controller&&window.toast)toast('Update ready. Reopen the app to use it.');
        });
      });
    }).catch(function(){});
  });
})();
