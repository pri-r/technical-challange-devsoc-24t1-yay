function tooltipFunction() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
    navigator.clipboard.writeText("Prishaaa");
}

/* Found and adapted from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */
function navigationNice() {
    var name = document.getElementById("topnav");
    if (name.className === "topnav") {
        name.className += " responsive";
    } else {
        name.className = "topnav";
    }
}

function midnight() {
    var pageContent = document.documentElement.innerHTML;
    document.documentElement.innerHTML = '<img src="runaway.gif" style="width: 100%; height: 30%;">';
}

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollBottom = document.documentElement.scrollHeight - window.innerHeight;
    var startColor = [181, 217, 232];
    var endColor = [0, 0, 0]; 
    var opacity = scrollPosition / (scrollBottom * 1.2); 

    var interpolatedColor = startColor.map(function (start, index) {
        return start * (1 - opacity) + endColor[index] * opacity;
    });

    document.querySelector('.wrapper').style.backgroundColor
     = 'rgba(' + interpolatedColor.join(',') + ')';
});