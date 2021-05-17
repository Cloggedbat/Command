class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Enter Crypto"
                        id="search"
                    />
                    <br />
                    <button value={this.state.value} onChange={props.handleFormSubmit} className="btn btn-primary">
                        Search
        </button>
                </div>
            </form>
        );
    }
}