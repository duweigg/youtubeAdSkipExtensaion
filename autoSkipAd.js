console.log("running autoSkipAd.js")

let skipAD = ()=>{
  let skipButton = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0]
  if (skipButton !== undefined && skipButton.tagName === "BUTTON"){
    skipButton.click()
  }

  let closeADButton = document.getElementsByClassName('ytp-ad-overlay-close-button')[0]
  if (closeADButton !== undefined && closeADButton.tagName === "BUTTON"){
    closeADButton.click()
  }
}



setInterval(skipAD, 500)
// skipButton.click()