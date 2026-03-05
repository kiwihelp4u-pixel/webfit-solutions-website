document.querySelectorAll('.menu a').forEach(anchor => {
anchor.addEventListener('click', function (e) {

const target = this.getAttribute('href');

if(target.startsWith("#")){
e.preventDefault();

document.querySelector(target).scrollIntoView({
behavior: 'smooth'
});
}

});
});