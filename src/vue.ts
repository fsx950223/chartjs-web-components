import {Vue,Component,Prop,Watch} from 'vue-property-decorator'
import './base'
@Component({})
export default class Chartjs extends Vue{
    @Prop(Object)
    data
    @Prop(Object)
    options
    @Prop(String)
    type
    chart=null
    ref:string=null
    created(){
        this.ref=btoa(Date.now()+parseInt(''+Math.random()*10000)+'').replace(/=/g,'')
    }
    mounted(){
        this.chart=this.$refs[this.ref]
    }
    render(createElement){
        return createElement('base-chart',{props:{type:this.type},ref:this.ref})
    }
    @Watch('data',{ deep: true })
    onDataChange(val){
        Object.assign(this.chart.dataValue,val||{})
    }
    @Watch('options',{ deep: true })
    onOptionsChange(val){
        Object.assign(this.chart.optionsValue,val||{})
    }
}