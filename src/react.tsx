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
    }
    render(){
        return <base-chart id={this.ref} type={this.props.type}></base-chart>
    }
    componentDidUpdate(prevProps){
        //if(JSON.stringify(prevProps.data)!==JSON.stringify(this.props.data)){
            Object.assign(this.chart.dataValue,this.props.data||{})
        //}
        //if(JSON.stringify(prevProps.options)!==JSON.stringify(this.props.options)){
            Object.assign(this.chart.optionsValue,this.props.options||{})
        //}
    }
}