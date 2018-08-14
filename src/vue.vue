<template>
    <base-chart id="chartjs-web-components" :type="type"></base-chart>
</template>
<script lang='ts'>
export default {
    props:{
        data:Object,
        options:Object,
        type:String,
    },
    data(){
        return {
            chart:null
        }
    },
    mounted(){
        this.chart=document.querySelector('#chartjs-web-components')
    },
    watch:{
        data:{
            handler(val) {
                this.chart.dataValue=val
            },
            deep: true
        },
        options:{
            handler(val) {
                this.chart.optionsValue=val
            },
            deep: true
        }
    }
}
</script>
