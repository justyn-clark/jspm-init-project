class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("Text field value is: '" + this.state.value + "'");
    }

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Hello!"
                       value={this.state.value}
                       onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById('root'));