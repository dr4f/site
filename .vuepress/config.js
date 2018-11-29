module.exports = {
  title: 'dr4',
  description: 'The modern, binary object-oriented format',
  base:'/site/',
  dest: 'docs',
  themeConfig: {
  	sidebar: 'auto',
  	displayAllHeaders: true,
  	repo: 'dr4f',
  	repoLabel: 'dr4 on GitHub',
  	 nav: [
  	    {text: 'Home', link: '/'},
  	    {text: 'About', link: '/about.html'},
  	    {text: 'FAQ', link: '/faq.html'},
  	    {text: 'Spec', link: '/spec/'},
  	    {text: 'Format', link: '/format.html'},
  	    {text: 'Projects', link: '/projects/'}
  	 ]
  }
}
