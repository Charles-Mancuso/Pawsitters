import React, { Component } from "react";
import BookingIndexItem from "./booking_index_item";

class BookingIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchBookings();
    }

    render() {
        const { bookings } = this.props;
        return (
            <div>
                <ul>
                    {bookings.map((booking, index) => <BookingIndexItem key={booking.id} booking={booking} index={index} />)}
                </ul>
            </div>
        );
    }
}

export default BookingIndex;