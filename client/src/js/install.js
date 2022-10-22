const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';

});

butInstall.addEventListener('click', () => {
    const promptEvent = window.deferredPrompt;

    promptEvent.prompt()

    window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  });

  window.addEventListener("appinstalled", (event)=>{
    window.deferredPrompt = null;
  })

  