import React from 'react';

class BookingUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: this.props.booking.start_date,
            end_date: this.props.booking.end_date
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBooking(this.state.start_date, this.state.end_date, this.props.booking.sitter_id, this.props.booking.id)
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    render() {
        return (
            <form className="booking-submit-container" onSubmit={this.handleSubmit}>
                <div className="edit-date-header">Edit Dates:</div>
                <input
                    className="book-update-button"
                    type="date"
                    value={this.state.start_date}
                    onChange={this.update('start_date')}
                />
                <input
                    className="book-update-button"
                    type="date"
                    value={this.state.end_date}
                    onChange={this.update('end_date')}
                />
                <br/>
                <div className="book-update-actual-button-container">
                    <button className="book-update-actual-button">Edit</button>
                </div>
            </form>
        );
    }
}

export default BookingUpdate;