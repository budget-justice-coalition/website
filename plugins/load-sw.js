// eslint-disable-next-line no-console
console.log('Loading service worker!')

// eslint-disable-next-line no-unused-vars
const loadSW = () => {
  if (!('serviceWorker' in navigator)) {
    return false
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      // eslint-disable-next-line no-console
      .then(() => console.log('Service worker registered successfully'))
      // eslint-disable-next-line no-console
      .catch(() => console.log('Error loading service worker'))
  })
}

// loadSW()
