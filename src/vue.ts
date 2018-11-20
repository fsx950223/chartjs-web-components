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
        return createElement('base-chart',{attrs:{type:this.type},ref:this.ref,domProps:{data:this.data,options:this.options}})
    }
}
