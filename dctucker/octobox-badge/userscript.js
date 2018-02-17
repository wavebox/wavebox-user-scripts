setInterval(function(){
  window.wavebox.badge.setCount( parseInt(window.$('title').text().replace("Octobox (","")) )
}, 2000);
