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
import './base.js';
class MyApp extends LitElement {
    constructor() {
        super(...arguments);
        this.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
        };
    }
    _render() {
        return html `
      <base-chart type="line" data="${this.data}" options="${{}}"></base-chart>
    `;
    }
}
window.customElements.define('my-app', MyApp);
//# sourceMappingURL=my-app.js.map