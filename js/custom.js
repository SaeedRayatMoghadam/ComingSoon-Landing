document.addEventListener('alpine:init', () => {
    Alpine.data('darkMode', () => ({
            darkMode: false,

            init() {
                this.darkMode = localStorage.theme === 'dark' ? true : false;

                this.$watch('darkMode', (value) => {
                    localStorage.theme = value ? 'dark' : 'light';
                })
            }
        })),
        Alpine.data('countDown', () => ({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',

            init() {
                let endDate = new Date(2028, 11, 1).getTime();
                setInterval(() => {
                    let currentDate = new Date().getTime();
                    let time = endDate - currentDate;

                    if (time >= 0) {
                        this.days = this.format(Math.floor(time / (1000 * 60 * 60 * 24)));
                        this.hours = this.format(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                        this.minutes = this.format(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
                        this.seconds = this.format(Math.floor((time % (1000 * 60)) / 1000));
                    }
                }, 1000);
            },

            format(num) {
                return num < 10 ? '0' + num : num;
            }

        }))
});


//Text Writer
const textElement = document.querySelector('#text');
ityped.init(textElement, {
    strings: ['متن ساختگی ...', 'متن ساختگی با تولید', 'متن ساختگی با تولید سادگی']
});


//Map
let mymap = L.map('mapid').setView([35.67426901547201, 51.394755885994755], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([35.67426901547201, 51.394755885994755]).bindPopup("Saeed RayatMoghadam").addTo(mymap).openPopup();