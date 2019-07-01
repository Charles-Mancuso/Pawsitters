import { connect } from "react-redux";
import { fetchSitters } from "../../actions/sitter_actions";
import SitterIndex from "./sitter_index";

const msp = (state) =>  {
    return {
        sitters: Object.values(state.entities.sitters)
    };
};

const mdp = dispatch => {
    return {
        fetchSitters: () => dispatch(fetchSitters())
    };
};

export default connect(msp, mdp)(SitterIndex);