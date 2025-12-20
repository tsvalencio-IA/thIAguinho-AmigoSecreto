/* ==================================================================
   CONTROLE PWA - thIAguinho Noel
   ================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema Amigo Secreto Iniciado");

    // Registrar Service Worker para Cache
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('Service Worker registrado:', reg.scope))
                .catch(err => console.log('Falha no SW:', err));
        });
    }
});
