<template>
    <base-chart id="chartjs-web-components" :type="type"></base-chart>
</template>
<script lang='ts'>
import {Vue,Component,Prop,Watch} from 'vue-property-decorator'
@Component()
export default class Chartjs extends Vue{
    @Prop(Object)
    data
    @Prop(Object)
    options
    @Prop(String)
    type
    chart=null
    mounted(){
        this.chart=document.querySelector('#chartjs-web-components')
    }
    @Watch('data',{ deep: true })
    onDataChange(val){
        this.chart.dataValue=val
    }
    @Watch('options',{ deep: true })
    onOptionsChange(val){
        this.chart.optionsValue=val
    }
}
</script>
