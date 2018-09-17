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
## React Example
``` jsx
<Chartjs data={data} type={type}/>
```
``` js
import Chartjs from '../src/react'
```

## Demo
```
npm run start
```
