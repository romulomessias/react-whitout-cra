/* eslint-disable import/prefer-default-export */
// type Config = {
//   onSuccess?: (registration: ServiceWorkerRegistration) => void;
//   onUpdate?: (registration: ServiceWorkerRegistration) => void;
// };

function registerValidSW() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js', { scope: './' })
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    }
}

const register = () => {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
        return;
    }

    window.addEventListener('load', () => {
        registerValidSW();
    });
};

export { register };
