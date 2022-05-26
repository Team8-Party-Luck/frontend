// let deferredInstallPrompt = null;
// let installButton = null;

// window.addEventListener("load", () => {
//   installButton = document.getElementById("install-button");
//   installButton.addEventListener("click", installPWA);
// });

// window.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
//   deferredInstallPrompt = event;
//   installButton.removeAttribute("hidden");
// });

// function installPWA() {
//   deferredInstallPrompt.prompt();
//   installButton.remove();

//   deferredInstallPrompt.userChoice.then((choice) => {
//     if (choice.outcome === "accepted") {
//       console.log("User accepted the A2HS prompt", choice);
//     } else {
//       console.log("User dismissed the A2HS prompt", choice);
//     }
//     deferredInstallPrompt = null;
//   });
// }
