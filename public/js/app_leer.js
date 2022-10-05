var map = L.map('map').setView([53.23317, 7.45260], 30);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([53.23317, 7.45260]).addTo(map).on('click', function(e) {
    document.querySelector('#content1').scrollIntoView({
        behavior: 'smooth'
    });
});

function to_top()
{
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
}
