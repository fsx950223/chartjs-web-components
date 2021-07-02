import { CreateElement, VNode } from 'vue';
import {Component, Prop, Vue} from 'vue-property-decorator';
import base from './base';
/**
 * Vue Wrapper for charjs-web-components
 */
@Component({})
export default class Chartjs extends Vue {
    @Prop({type: Object})
    public data: Chart.ChartData;
    @Prop({type: Object})
    public options: Chart.ChartOptions;
    @Prop({type: String})
    public type: Chart.ChartType; // tslint:disable-line:no-reserved-keywords
    public chart: Vue | Element | (Vue | Element)[];
    public ref: string;
    public created(): void {
        this.ref = btoa(`${Date.now() + crypto.getRandomValues(new Uint32Array(1))[0]}`);
    }
    public mounted(): void {
        this.chart = this.$refs[this.ref];
    }
    public render(createElement: CreateElement): VNode {
        return createElement('base-chart', {attrs: {type: this.type}, ref: this.ref, domProps: {data: this.data, options: this.options}});
    }
}
