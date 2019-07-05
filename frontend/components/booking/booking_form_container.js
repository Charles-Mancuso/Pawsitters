import { connect } from 'react-redux';
import BookingForm from "./booking_form";
import { createBooking } from "./../../actions/booking_actions"

const mdp = dispatch => {
    return {
        createBooking: (startDate, endDate, sitterId) => dispatch(createBooking(startDate, endDate, sitterId)),
    }
}

export default connect(null, mdp)(BookingForm);


