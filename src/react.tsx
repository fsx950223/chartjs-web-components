import * as React from 'react'
import './base'

declare global {
    namespace JSX{
        interface IntrinsicElements {
            'base-chart': any
        }
    }
}

interface Props{
    data:object;
    options?:object;
    type:string;
}
export default class Chartjs extends React.Component<Props,{}>{
    chart=null
    componentDidMount(){
        this.chart=document.querySelector('#chartjs-web-components')
        this.componentDidUpdate()
    }
    render(){
        return <base-chart id="chartjs-web-components" type={this.props.type}></base-chart>
    }
    componentDidUpdate(){
        Object.assign(this.chart.dataValue,this.props.data||{})
        Object.assign(this.chart.optionsValue,this.props.options||{})
    }
}