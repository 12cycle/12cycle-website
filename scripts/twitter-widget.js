;(function () {
  const scriptId = 'twitter-wjs'

  function inject() {
    if (document.getElementById(scriptId)) {
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.onload = () => {
      window.dispatchEvent(new CustomEvent('twitter:loaded'))
    }
    script.onerror = () => {
      window.dispatchEvent(new CustomEvent('twitter:error'))
    }
    script.async = true
    script.src = 'https://platform.twitter.com/widgets.js'
    document.body.appendChild(script)
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    inject()
  } else {
    window.addEventListener('DOMContentLoaded', inject, { once: true })
  }
})()
