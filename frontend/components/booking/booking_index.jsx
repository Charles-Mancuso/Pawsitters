import React, { Component } from "react";
import BookingIndexItem from "./booking_index_item_container";
import NavBarContainer from "../nav_bar/nav_bar_container";
import NavBar from "../nav_bar/nav_bar";

class BookingIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchBookings();
    }

    render() {
        const { bookings } = this.props;
        if (bookings.length === 0) {
            return (
                <div>
                    <NavBarContainer />
                    <div className="your-bookings">Your Bookings:</div>
                    <div className="nobookings">Get to booking!</div>
                </div>
            )
        } else {
            return (
            <div>
                <NavBarContainer />
                <div className="your-bookings">Your Bookings:</div>
                <ul>
                    {bookings.map(booking => <BookingIndexItem key={booking.id} booking={booking} />)}
                </ul>
            </div>
            );
        }  
    } 
}

export default BookingIndex;