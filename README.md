# Chartjs Web Components

The web components for chart.js which is built on lit-element
## Install
```
npm i chartjs-web-components
```
## Usage
``` html
<base-chart id="chart" type="chartType" data="${chartData}" options="${chartOptions}"></base-chart>
```
``` js
import 'chartjs-web-components'
```
## Vue Example
``` html
<base-chart id="chart" type="chartType" :data="JSON.stringify(this.chartData)" :options="JSON.stringify(this.chartOptions)"></base-chart>
```
``` js
import 'chartjs-web-components'
```
## Add Data
``` js
document.querySelector('#chart').dataValue.dataset[0].data.push(data)
```
## Demo
```
npm run start
```
