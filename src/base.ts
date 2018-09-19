import {LitElement,html,property,customElement} from '@polymer/lit-element'
import {Chart} from 'chart.js'

@customElement('base-chart' as keyof HTMLElementTagNameMap)
export default class BaseChart extends LitElement{
    chart=null
    @property({type:String})
    type
    @property({type:Object})
    data
    @property({type:Object})
    options
    
    firstUpdated(){
        const data=typeof this.data==='string'?JSON.parse(this.data):(this.data||{})
        const options=typeof this.options==='string'?JSON.parse(this.options):(this.options||{})
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
            if(this.chart){
                this.chart.resize()
            }
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
        if(this.chart){
            this.chart.update()
        }
    }
    get dataValue(){
        if(this.chart){
            return this.chart.data
        }else{
            return {}
        }
    }
    get optionsValue(){
        if(this.chart){
            return this.chart.options
        }else{
            return {}
        }
    }
}
