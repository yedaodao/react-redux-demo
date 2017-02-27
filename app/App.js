import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ResourceName from '../redux/constants/ResourceName';
import * as monitorAction from '../redux/actions/monitor';

class App extends React.Component {
    componentWillMount() {
        this.props.getMonitorData(ResourceName.BANDWIDTH);
        setTimeout(() => {
            this.props.getMonitorData(ResourceName.BANDWIDTH);
        }, 2000);
    }

    render() {
        console.log(this.props.bandwidth);
        return <div>Hello World, {this.props.bandwidth}</div>
    }
}

function mapStateToProps(state) {
    return {
        bandwidth: state.get("monitorRes").get(ResourceName.BANDWIDTH)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMonitorData: bindActionCreators(monitorAction.getMonitorData, dispatch)
    }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)