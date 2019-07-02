import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class SitterShow extends React.Component {
  componentDidMount() {
    this.props.fetchSitter(this.props.match.params.id);
  }

  boarding() {
    if (this.props.sitter.is_boarding === true) {
      return (
        <div>
          <div>Dog Boarding</div>
          <div>in the sitter's home</div>
          <div>${this.props.sitter.boarding_price}</div>
          <div>per night</div>
        </div>
      );
    } else {
      return null;
    }
  }

  sitting() {
    if (this.props.sitter.is_sitting === true) {
      return (
        <div>
          <div>House Sitting</div>
          <div>in your home</div>
          <div>${this.props.sitter.sitting_price}</div>
          <div>per night</div>
        </div>
      );
    } else {
      return null;
    }
  }

  visiting() {
    if (this.props.sitter.is_visiting === true) {
      return (
        <div>
          <div>Drop-In Visits</div>
          <div>30-minute check-ins</div>
          <div>${this.props.sitter.visiting_price}</div>
          <div>per visit</div>
        </div>
      );
    } else {
      return null;
    }
  }

  daycare() {
    if (this.props.sitter.is_daycare === true) {
      return (
        <div>
          <div>Doggy Day Care</div>
          <div>in the sitter's home</div>
          <div>${this.props.sitter.daycare_price}</div>
          <div>per day</div>
        </div>
      );
    } else {
      return null;
    }
  }

  walking() {
    if (this.props.sitter.is_walking === true) {
      return (
        <div>
          <div>Dog Walking</div>
          <div>30-minute walks</div>
          <div>${this.props.sitter.walking_price}</div>
          <div>per walk</div>
        </div>
      );
    } else {
      return null;
    }
  }

  trav_pref() {
    if (this.props.sitter.is_giant_dog === true) {
      return (
        <div className="highlight-these">
          <div>
            <div><i className="fas fa-dog" /></div>
            <div>0-15</div>
            <div>lbs</div>
          </div>
          <div>
            <div><i className="fas fa-dog" /></div>
            <div>16-40</div>
            <div>lbs</div>
          </div>
          <div>
            <div><i className="fas fa-dog" /></div>
            <div>41-100</div>
            <div>lbs</div>
          </div>
          <div>
            <div><i className="fas fa-dog" /></div>
            <div>101+</div>
            <div>lbs</div>
          </div>
        </div>
      );
    } else if (this.props.sitter.is_large_dog === true) {
      return (
        <div>
          <div className="highlight-these">
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>0-15</div>
              <div>lbs</div>
            </div>
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>16-40</div>
              <div>lbs</div>
            </div>
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>41-100</div>
              <div>lbs</div>
            </div>
          </div>
          <div className="gray-these">
            <div><i className="fas fa-dog" /></div>
            <div>101+</div>
            <div>lbs</div>
          </div>
        </div>
      );
    } else if (this.props.sitter.is_medium_dog === true) {
      return (
        <div>
          <div className="highlight-these">
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>0-15</div>
              <div>lbs</div>
            </div>
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>16-40</div>
              <div>lbs</div>
            </div>
          </div>
          <div className="gray-these">
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>41-100</div>
              <div>lbs</div>
            </div>
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>101+</div>
              <div>lbs</div>
            </div>
          </div>
        </div>
      ); 
    } else {
      return (
        <div>
          <div className="highlight-these">
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>0-15</div>
              <div>lbs</div>
            </div>
          </div>
          <div className="gray-these">
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>16-40</div>
              <div>lbs</div>
            </div>
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>41-100</div>
              <div>lbs</div>
            </div>
            <div>
              <div><i className="fas fa-dog" /></div>
              <div>101+</div>
              <div>lbs</div>
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
        <div className="sitter-show-img-container">
          <img className="sitter-show-img" src={sitter.image_url} />
        </div>
        <div className="sitter-show-top-info-container">
          <span className="sitter-show-name">{sitter.name}</span>
          <br />
          <span className="sitter-show-city">{sitter.city}</span>
        </div>
        <div className="sitter-show-services-container">
          <div>Services</div>
          {this.boarding()}
          {this.sitting()}
          {this.visiting()}
          {this.daycare()}
          {this.walking()}
        </div>
        <div>
          About {sitter.name}
          <br />
          {sitter.title}
          <br />
          {sitter.sitter_bio}
        </div>
        <div>
          Traveling Preferences
          {this.trav_pref()}
        </div>
      </div>
    );
  }
}

export default SitterShow;