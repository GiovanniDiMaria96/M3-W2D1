function scrollToDiv(targetId) {
    var div = document.getElementById(targetId);
    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
var bottoni = document.querySelectorAll('nav a');
bottoni.forEach(function(bottone) {
    bottone.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        scrollToDiv(targetId);
    });
});