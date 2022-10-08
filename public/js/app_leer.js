var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;
  
if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
} else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
} else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
} else if (/Android/.test(userAgent)) {
    os = 'Android';
} else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
}

console.log(os)

if (os == "Android" | os == "iOs")
{
    var map = L.map('map').setView([53.2316, 7.4560], 14);

}else{
    var map = L.map('map').setView([53.2316, 7.4560], 16);
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([53.231262, 7.463880]).addTo(map).on('click', function(e) {
    document.querySelector('#content1').scrollIntoView({
        behavior: 'smooth'
    });
});

L.marker([53.23214, 7.44918]).addTo(map).on('click', function(e) {
    document.querySelector('#content2').scrollIntoView({
        behavior: 'smooth'
    });
});

L.marker([53.23299, 7.45239]).addTo(map).on('click', function(e) {
    document.querySelector('#content4').scrollIntoView({
        behavior: 'smooth'
    });
});

function to_top()
{
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
}
