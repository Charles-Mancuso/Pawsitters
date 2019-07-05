import { connect } from 'react-redux';
import BookingUpdate from "./booking_update";
import { updateBooking } from "./../../actions/booking_actions"

const mdp = (dispatch) => {
    return {
        updateBooking: (start_date, end_date, sitter_id, booking_id) => dispatch(updateBooking(start_date, end_date, sitter_id, booking_id))
    }
}

export default connect(null, mdp)(BookingUpdate);