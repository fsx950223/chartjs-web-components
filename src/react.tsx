import * as React from 'react';
import base from './base';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'base-chart': any;
        }
    }
}

type Props= {
    data: Chart.ChartData;
    options?: Chart.ChartOptions;
    type: Chart.ChartType; // tslint:disable-line:no-reserved-keywords
};
/**
 * React Wrapper for charjs-web-components
 */
export default class Chartjs extends React.Component<Props, {}> {
    public chart: Chart.ChartConfiguration;
    public ref: string;
    constructor(props: Props) {
        super(props);
        this.ref = btoa(`${Date.now() + crypto.getRandomValues(new Uint32Array(1))[0]}`)
        .replace(/=/g, '');
    }
    public componentDidMount(): void {
        this.chart = document.querySelector(`#${this.ref}`) as Chart.ChartConfiguration;
        this.chart.data = this.props.data || {};
        this.chart.options = this.props.options || {};
    }
    public render(): JSX.Element {
        return <base-chart id={this.ref} type={this.props.type}></base-chart>;
    }
    public componentDidUpdate(prevProps: Props): void {
        Object.assign(this.chart.data, prevProps.data || {});
        Object.assign(this.chart.options, prevProps.options || {});
        this.render();
    }
}
