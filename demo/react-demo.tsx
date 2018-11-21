import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ReactChartjs from '../src/react'

const data={
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
}
const type="line"

class Demo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data,
            type
        }
        setInterval(()=>{
            data.labels.push('July')
            data.datasets[0].data.push(parseInt(''+Math.random()*100))
            const copy=Object.assign({},data)
            this.setState(state=>({
                data:copy
            }))
          },3000)
    }
    render() {
      return (
        <ReactChartjs data={data} type={type}/>
      );
    }
  }
ReactDOM.render(
    <Demo/>,
    document.getElementById("react")
);