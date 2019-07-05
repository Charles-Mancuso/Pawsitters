import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import BookingFormContainer from "../booking/booking_form_container";
import NavBarContainer from "../nav_bar/nav_bar_container";

class SitterShow extends React.Component {
  componentDidMount() {
    this.props.fetchSitter(this.props.match.params.sitterId);
  }

  boarding() {
    if (this.props.sitter.is_boarding === true) {
      return (
        <div className="sitter-show-services">
          <div className="sitter-show-services-one">
            <div className="sitter-show-services-title">Dog Boarding</div>
            <div className="sitter-show-services-description">in the sitter's home</div>
          </div>
          <div className="sitter-show-services-two">
            <div className="sitter-show-services-price">${this.props.sitter.boarding_price}</div>
            <div className="sitter-show-services-price-description">per night</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  sitting() {
    if (this.props.sitter.is_sitting === true) {
      return (
        <div className="sitter-show-services">
          <div className="sitter-show-services-one">
            <div className="sitter-show-services-title">House Sitting</div>
            <div className="sitter-show-services-description">in your home</div>
          </div>
          <div className="sitter-show-services-two">
            <div className="sitter-show-services-price">${this.props.sitter.sitting_price}</div>
            <div className="sitter-show-services-price-description">per night</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  visiting() {
    if (this.props.sitter.is_visiting === true) {
      return (
        <div className="sitter-show-services">
          <div className="sitter-show-services-one">
            <div className="sitter-show-services-title">Drop-In Visits</div>
            <div className="sitter-show-services-description">30-minute check-ins</div>
          </div>
          <div className="sitter-show-services-two">
            <div className="sitter-show-services-price">${this.props.sitter.visiting_price}</div>
            <div className="sitter-show-services-price-description">per visit</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  daycare() {
    if (this.props.sitter.is_daycare === true) {
      return (
        <div className="sitter-show-services">
          <div className="sitter-show-services-one">
            <div className="sitter-show-services-title">Doggy Day Care</div>
            <div className="sitter-show-services-description">in the sitter's home</div>
          </div>
          <div className="sitter-show-services-two">
            <div className="sitter-show-services-price">${this.props.sitter.daycare_price}</div>
            <div className="sitter-show-services-price-description">per day</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  walking() {
    if (this.props.sitter.is_walking === true) {
      return (
        <div className="sitter-show-services">
          <div className="sitter-show-services-one">
            <div className="sitter-show-services-title">Dog Walking</div>
            <div className="sitter-show-services-description">30-minute walks</div>
          </div>
          <div className="sitter-show-services-two">
            <div className="sitter-show-services-price">${this.props.sitter.walking_price}</div>
            <div className="sitter-show-services-price-description">per walk</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  trav_pref() {
    if (this.props.sitter.is_giant_dog === true) {
      return (
        <div className="sitter-show-travel-pref">
          <div className="highlight-these">
            <div className="box1">
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">0-15</div>
              <div className="lbs">lbs</div>
            </div>
            <div className="box2">
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers" className="numbers">16-40</div>
              <div className="lbs">lbs</div>
            </div>
            <div className="box3">
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">41-100</div>
              <div className="lbs">lbs</div>
            </div>
            <div className="box4">
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">101+</div>
              <div className="lbs">lbs</div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.sitter.is_large_dog === true) {
      return (
        <div className="sitter-show-travel-pref">
          <div className="highlight-these">
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">0-15</div>
              <div className="lbs">lbs</div>
            </div>
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers" className="numbers">16-40</div>
              <div className="lbs">lbs</div>
            </div>
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">41-100</div>
              <div className="lbs">lbs</div>
            </div>
          </div>
          <div className="gray-these">
            <div className="dog"><i className="fas fa-dog" /></div>
            <div className="numbers">101+</div>
            <div className="lbs">lbs</div>
          </div>
        </div>
      );
    } else if (this.props.sitter.is_medium_dog === true) {
      return (
        <div className="sitter-show-travel-pref">
          <div className="highlight-these">
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">0-15</div>
              <div className="lbs">lbs</div>
            </div>
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers" className="numbers">16-40</div>
              <div className="lbs">lbs</div>
            </div>
          </div>
          <div className="gray-these">
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">41-100</div>
              <div className="lbs">lbs</div>
            </div>
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">101+</div>
              <div className="lbs">lbs</div>
            </div>
          </div>
        </div>
      ); 
    } else {
      return (
        <div className="sitter-show-travel-pref">
          <div className="highlight-these">
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">0-15</div>
              <div className="lbs">lbs</div>
            </div>
          </div>
          <div className="gray-these">
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers" className="numbers">16-40</div>
              <div className="lbs">lbs</div>
            </div>
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">41-100</div>
              <div className="lbs">lbs</div>
            </div>
            <div>
              <div className="dog"><i className="fas fa-dog" /></div>
              <div className="numbers">101+</div>
              <div className="lbs">lbs</div>
            </div>
          </div>
        </div>
      ); 
    }
  }

  render() {
    const { sitter } = this.props;
    if (!sitter) return null;

    return (
      <div className="sitter-show-main-container">
        <NavBarContainer/>
        <div className="sitter-show-img-and-top-info">
          <div className="sitter-show-img-container">
            <img className="sitter-show-img" src={sitter.image_url} />
          </div>
          <div className="sitter-show-top-info-container">
            <span className="sitter-show-name">{sitter.name}</span>
            <span className="sitter-show-city">{sitter.city}</span>
              <div className="sitter-show-responses-container">
                <div className="response-box1">
                  <span className="response-icon"><i className="far fa-comments"></i> </span>
                  <span className="response">Response Rate: </span>
                  <span className="sitter-show-response">{sitter.response_rate}%</span>
                </div>
                <div className="response-box2">
                  <span className="response-icon"><i className="far fa-clock"></i>    </span>
                  <span className="response">Response Time: </span>
                  <span className="sitter-show-response">{sitter.response_time}</span>
                </div>
              </div>
              <div className="sitter-show-booking-button">
                <div className="sitter-show-sitter-name">Book {sitter.name}:  </div>
              <div className="sitter-show-bookingformcontainer"><BookingFormContainer sitterId={this.props.sitter.id} /></div>
              </div>
            </div>
          </div>
        
        <div className="sitter-show-bottom-container">
          <div className="sitter-show-services-container">
            <div className="sitter-show-services-header">Services</div>
            <div className="sitter-show-services">
              {this.boarding()}
              {this.sitting()}
              {this.visiting()}
              {this.daycare()}
              {this.walking()}
            </div>
          </div>
          <div className="sitter-show-description-contrainer">
            <div className="sitter-show-description-header">About {sitter.name}</div>
            <div className="sitter-show-description-title">{sitter.title}</div>
            <div className="sitter-show-description-bio">{sitter.sitter_bio}</div>
          </div>
        </div>
          <div className="sitter-show-travel-container">
            <div className="sitter-show-travel-header">Size Preferences</div>
            <div className="main-box">{this.trav_pref()}</div>
          </div>
        
      </div>
    );
  }
}

export default SitterShow;