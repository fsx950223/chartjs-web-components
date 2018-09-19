import { LitElement, html } from '@polymer/lit-element';
import '../index';

class MyDemo extends LitElement {
  data={
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
  }
  options={}
  type="line"
  render() {
    const {type,data,options}=this
    return html`
      <base-chart type="${type}" .data="${data}" .options="${options}"></base-chart>
    `;
  }
  firstUpdated(){
    setInterval(()=>{
      this.data.labels.push('July')
      this.data.datasets[0].data.push(parseInt(''+Math.random()*100))
    },3000)
  }
}

window.customElements.define('my-demo', MyDemo);
