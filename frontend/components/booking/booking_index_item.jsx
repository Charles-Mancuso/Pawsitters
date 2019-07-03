import React from "react";

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { booking } = this.props;
        if (!booking) return null;
        return (
            <li>
                <span>hi</span>
                <span>{booking.start_date}</span>
                <span>{booking.end_date}</span>
            </li>
        )
    }
}

export default BookingIndexItem;