const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  console.log("event", event)

  butInstall.style.visibility = 'visible';

});

butInstall.addEventListener('click', () => {
  console.log("clicked")
    const promptEvent = window.deferredPrompt;

    if(!promptEvent){
      return;
    }
    promptEvent.prompt()

    window.deferredPrompt = null;
   
    buttInstall.classList.toggle("hide", true);
  });

  window.addEventListener("appinstalled", (event)=>{
    window.deferredPrompt = null;
  })

  