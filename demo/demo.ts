import { LitElement, html } from '@polymer/lit-element';
import '../src/base';

class MyDemo extends LitElement {
  static get properties() {
    return {
      type: String,
      data: Object
    }
  }
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
  _render({type,data,options}) {
    return html`
      <base-chart type="${type}" data="${data}" options="${options}"></base-chart>
    `;
  }
  _didRender(){
    setInterval(()=>{
      this.data.labels.push('July')
      this.data.datasets[0].data.push(parseInt(''+Math.random()*100))
      // this.shadowRoot.querySelector('base-chart').dataValue.labels.push('July')
      // this.shadowRoot.querySelector('base-chart').dataValue.datasets[0].data.push(parseInt(''+Math.random()*100))
    },3000)
  }
}

window.customElements.define('my-demo', MyDemo);
