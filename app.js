/* menu movement */
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const linkedInLink = document.querySelector('#linkedin')
const gitHubLink = document.querySelector('#github-square')
const portfolioLink = document.querySelector('#portfolioLink')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

linkedInLink.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/staceypopenfoose/', '_blank');
})

gitHubLink.addEventListener('click', function() {
    window.open('https://github.com/slpop', '_blank');
})

portfolioLink.addEventListener('click', function() {
    window.open('https://github.com/slpop/portfolio-website', '_blank');
})
