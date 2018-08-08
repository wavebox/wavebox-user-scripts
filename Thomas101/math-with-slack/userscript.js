// math-with-slack originally ported from https://github.com/fsavje/math-with-slack
var mathjax_config = document.createElement('script');
mathjax_config.type = 'text/x-mathjax-config';
mathjax_config.text = `
  MathJax.Hub.Config({
    messageStyle: 'none',
    extensions: ['tex2jax.js'],
    jax: ['input/TeX', 'output/HTML-CSS'],
    tex2jax: {
      displayMath: [['\$\$', '\$\$']],
      element: 'msgs_div',
      ignoreClass: 'ql-editor',
      inlineMath: [['\$', '\$']],
      processEscapes: true,
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    },
    TeX: {
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
    }
  });
`;
var mathjax_observer = document.createElement('script');
mathjax_observer.type = 'text/x-mathjax-config';
mathjax_observer.text = `
  var target = document.querySelector('#messages_container');
  var options = { attributes: false, childList: true, characterData: true, subtree: true };
  var observer = new MutationObserver(function (r, o) { MathJax.Hub.Queue(['Typeset', MathJax.Hub]); });
  observer.observe(target, options);
`;
var mathjax_script = document.createElement('script');
mathjax_script.type = 'text/javascript';
mathjax_script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js';
document.head.appendChild(mathjax_config);
document.head.appendChild(mathjax_observer);
document.head.appendChild(mathjax_script);
