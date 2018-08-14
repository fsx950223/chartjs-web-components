import * as React from 'react';
import './base';
export default class Chartjs extends React.Component {
    constructor() {
        super(...arguments);
        this.dom = null;
    }
    componentDidMount() {
        this.dom = document.querySelector('#chartjs-web-components');
        this.componentDidUpdate();
    }
    render() {
        return React.createElement("base-chart", { id: "chartjs-web-components", type: this.props.type });
    }
    componentDidUpdate() {
        Object.assign(this.dom.dataValue, this.props.data || {});
        Object.assign(this.dom.optionsValue, this.props.options || {});
    }
}
//# sourceMappingURL=react.js.map