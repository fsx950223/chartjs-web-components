# Chartjs Web Components
The web components for chart.js which is built on lit-element
## Live Demo
https://fsx950223.github.io/chartjs-web-components/live-demo/
## Install
``` bash
npm i chartjs-web-components
```
## Lit-Element Usage
``` html
<base-chart id="chart" type="chartType" .data="${chartData}" .options="${chartOptions}"></base-chart>
```
``` js
import 'chartjs-web-components'
```
## Vue Example
``` html
<base-chart id="chart" type="chartType" :data="data" :options="options"></base-chart>
```
``` js
import VueChartjs from 'chartjs-web-components/dist/vue.js'
```
## React Example
``` jsx
import ReactChartjs from 'chartjs-web-components/dist/react.js'
<ReactChartjs data={data} type={type} options={options}/>
```
## Demo
``` bash
npm run start
```
