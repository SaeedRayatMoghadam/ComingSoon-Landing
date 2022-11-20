document.addEventListener('alpine:init', () => {
    Alpine.data('darkMode', () => ({
        darkMode:false,

        init() {
            this.darkMode = localStorage.theme === 'dark' ? true : false;

            this.$watch('darkMode', (value) => {
                localStorage.theme = value ? 'dark' : 'light';
            })
        }
    })
)});