import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Chartjs from '../src/react'

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
setInterval(()=>{
    data.labels.push('July')
    data.datasets[0].data.push(parseInt(''+Math.random()*100))
    ReactDOM.render(
        <Chartjs data={data} type={type}/>,
        document.getElementById("example")
    );
  },3000)
ReactDOM.render(
    <Chartjs data={data} type={type}/>,
    document.getElementById("example")
);