var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading listing-company">
                    <span className="listing-position-name">{ this.props.position }</span>
                    <small className="listing-company-name">{ this.props.company }</small>
                    <small className="listing-location">{ this.props.local }</small>
                </h4>
                <p className="list-group-item-text">
                    <span className="listing-job-type">Looking for: { this.props.lookingFor }</span>
                </p>
                <p className="list-group-item-text">
                    <span className="listing-posted">Posted: { this.props.postedDate }</span>
                    <span className="listing-company-category">{ this.props.category }</span>
                </p>
            </a>
        );
    }
});
