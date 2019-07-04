import React from "react";

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { booking, sitter } = this.props;
        if (!booking) return null;
        return (
            <div>
                <span>Your Bookings:</span>
                <img src={sitter.image_url}/>
                <span>{sitter.name}</span>
                <span>Located in: {sitter.city}, {sitter.state} {sitter.zip}</span>
                <span>Booking dates: </span>
                <span>{booking.start_date}</span>
                <span>-</span>
                <span>{booking.end_date}</span>
            </div>
        )
    }
}

export default BookingIndexItem;