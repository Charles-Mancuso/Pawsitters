import { connect } from 'react-redux';
import { fetchSitter } from '../../actions/sitter_actions';
import { deleteBooking } from '../../actions/booking_actions';
import BookingIndexItem from './booking_index_item';

const msp = (state, ownProps) => {
    return {
        sitter: state.entities.sitters[ownProps.booking.sitter_id],
    };
};

const mdp = dispatch => {
    return {
        fetchSitter: id => dispatch(fetchSitter(id)),
        deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
    };
};

export default connect(msp, mdp)(BookingIndexItem);