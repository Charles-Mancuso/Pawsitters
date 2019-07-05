import React from "react";
import BookingUpdateContainer from "../booking/booking_update_container";

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteBooking(this.props.booking.id)
    }

    render() {
        const { booking, sitter } = this.props;
        if (!booking) return null;
        return (
            <div className="booking-container">
                <div className="booking-img-container">
                    <img className="booking-img" src={sitter.image_url}/>
                </div>
                    <div className="booking-info-container">
                    <span className="booking-sitter-name">{sitter.name}</span>
                    <span className="booking-location-header">Located in: </span>
                    <span className="booking-location">{sitter.city}, {sitter.state} {sitter.zip}</span>
                    <span className="booking-date-header">Booking dates: </span>
                    <span className="booking-startdate">{booking.start_date} to {booking.end_date}</span>
                    <div className="booking-delete-button-container">
                        <button className="booking-delete-button" onClick={this.handleDelete}>delete booking</button>
                    </div>
                    <BookingUpdateContainer booking={booking}/>
                </div>
            </div>
        )
    }
}

export default BookingIndexItem;