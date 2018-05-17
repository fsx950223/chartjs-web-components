/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import './base';

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
      this.shadowRoot.querySelector('base-chart').dataValue.labels.push('July')
      this.shadowRoot.querySelector('base-chart').dataValue.datasets[0].data.push(parseInt(''+Math.random()*100))
    },3000)
  }
}

window.customElements.define('my-demo', MyDemo);