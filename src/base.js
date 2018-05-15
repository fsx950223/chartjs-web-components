import { LitElement, html } from '@polymer/lit-element';
import 'chart.js/dist/Chart.bundle.min.js';
class BaseChart extends LitElement {
    static get properties() {
        return {
            type: String,
            data: Object,
            options: Object
        };
    }
    _render() {
        return html `
            <style>
                .chart-size{
                    position: relative; 
                }
            </style>
            <div class="chart-size">
                <canvas></canvas>
            </div>
        `;
    }
    constructor() {
        super();
        window.addEventListener('resize', () => {
            this.chart.resize();
        });
    }
    _didRender(props, changedProps, oldProps) {
        if (!this.chart) {
            const ctx = this.shadowRoot.querySelector('canvas').getContext('2d');
            this.chart = new Chart(ctx, {
                type: props.type,
                data: props.data,
                options: props.options
            });
        }
        else {
            this.chart.type = props.type;
            this.chart.data = props.data;
            this.chart.options = props.options;
            this.chart.update();
        }
    }
    update() {
        this.chart.update();
    }
}
customElements.define('base-chart', BaseChart);
//# sourceMappingURL=base.js.map