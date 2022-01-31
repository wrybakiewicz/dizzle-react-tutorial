import './App.css';
import {Component} from "react";
import ReadString from "./ReadString";
import SetString from "./SetString";

class App extends Component {
    state = {loading: true, drizzleState: null}

    componentDidMount() {
        const {drizzle} = this.props;

        this.unsubscribe = drizzle.store.subscribe(() => {
            const drizzleState = drizzle.store.getState();

            if (drizzleState.drizzleStatus.initialized) {
                this.setState({loading: false, drizzleState});
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        if (this.state.loading) {
            return "Loading drizzle...";
        }
        return <div className="App">
            <ReadString drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
            <SetString drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />
        </div>
    }

}

export default App;