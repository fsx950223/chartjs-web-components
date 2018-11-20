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
    ref:string=null
    constructor(props){
        super(props)
        this.ref = btoa(Date.now()+parseInt(''+Math.random()*10000)+'').replace(/=/g,'');
    }
    componentDidMount(){
        this.chart=document.querySelector('#'+this.ref)
        this.chart.data=this.props.data||{}
        this.chart.options=this.props.options||{}
    }
    render(){
        return <base-chart id={this.ref} type={this.props.type}></base-chart>
    }
    componentDidUpdate(prevProps){
        Object.assign(this.chart.data,prevProps.data||{})
        Object.assign(this.chart.options,prevProps.options||{})
        this.render()
    }
}