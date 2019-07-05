import React from 'react';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: '',
            end_date: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
            this.props.createBooking(this.state.start_date, this.state.end_date, this.props.sitterId)
        }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    render() {
        return (
            <form className="booking-submit-container" onSubmit={this.handleSubmit}>
                <input 
                    type="date"
                    value={  this.state.start_date}
                    onChange={this.update('start_date')}
                    />
                <input
                    type="date"
                    value={  this.state.end_date}
                    onChange={this.update('end_date')}
                />
                <button className="booksitterbutton">Book sitter!</button>
            </form>
        );
    }
}

export default BookingForm;