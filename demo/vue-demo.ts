import Vue from 'vue';
import VueChartjs from '../src/vue';
new Vue({
    el: '#vue',
    data() {
        return {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            type: 'line'
        };
    },
    mounted() {
        setInterval(() => {
            this.data.labels.push('July');
            this.data.datasets[0].data.push(parseInt('' + Math.random() * 100));
        },          3000);
    },
    render(h) {
        return h(VueChartjs, {props: {
            data: this.data,
            type: this.type
        }});
    }
});
