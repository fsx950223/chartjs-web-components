import {LitElement,html,property} from '@polymer/lit-element'
import {Chart} from 'chart.js'

export default class BaseChart extends LitElement{
    chart=null
    @property()
    type
    @property()
    data
    @property()
    options
    
    firstUpdated(){
        const data=this.data||{}
        const options=this.options||{}
        if(!this.chart){
            const ctx=this.shadowRoot.querySelector('canvas').getContext('2d')
            this.chart=new Chart(ctx, {
                type: this.type,
                data,
                options
            });
        }else{
            this.chart.type=this.type
            this.chart.data=data
            this.chart.options=options
            this.chart.update()
        }
        this.chart.data=this.observe(this.chart.data)       
        for(const prop in this.chart.data){
            this.chart.data[prop]=this.observe(this.chart.data[prop])
        }
        this.chart.data.datasets=this.chart.data.datasets.map(dataset=>{
            dataset.data=this.observe(dataset.data)
            return this.observe(dataset)
        })
        window.addEventListener('resize',()=>{
            this.chart&&this.chart.resize()
        })
    }
    observe(obj){
        const {updateChart}=this
        return new Proxy(obj,{
            set(target,prop,val,receiver){
                target[prop]=val
                Promise.resolve().then(()=>updateChart())
                return true
            }
        })
    }
    render(){
        return html`
            <style>
                .chart-size{
                    position: relative; 
                }
                canvas{
                    width:400px;
                    height:400px;
                }
            </style>
            <div class="chart-size">
                <canvas></canvas>
            </div>
        `;
    }
    get updateComplete(){
        return (async () => {
            return await super.updateComplete
        })();
    }
    updateChart=()=>{
        this.chart&&this.chart.update()
    }
}
if(!customElements.get('base-chart')){
    customElements.define('base-chart',BaseChart)
}