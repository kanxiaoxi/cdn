 console.log('\n' + ' %c MathJax ' + ' %c https://www.mathjax.org/ ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
 MathJax.Hub.Config({
     'HTML-CSS': {
         matchFontHeight: false
     },
     SVG: {
         matchFontHeight: false
     },
     CommonHTML: {
         matchFontHeight: false
     },
     tex2jax: {
         inlineMath: [
             ['$', '$'],
             ['\\(', '\\)']
         ],
         displayMath: [
             ["$$", "$$"],
             ["\\[", "\\]"]
         ],
         skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']
     }
 });