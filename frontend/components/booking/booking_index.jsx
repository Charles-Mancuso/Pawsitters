import React, { Component } from "react";
import BookingIndexItem from "./booking_index_item_container";

class BookingIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchBookings();
    }

    render() {
        const { bookings } = this.props;
        return (
            <div>
                <ul>
                    {bookings.map(booking => <BookingIndexItem key={booking.id} booking={booking} />)}
                </ul>
            </div>
        );
    }
}

export default BookingIndex;