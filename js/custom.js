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

const textElement = document.querySelector('#text');
ityped.init(textElement, {
    strings: ['متن ساختگی ...', 'متن ساختگی با تولید', 'متن ساختگی با تولید سادگی']
});