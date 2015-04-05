var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            company: 'TrackMaven',
            position: 'Software Maven',
            local: 'Washington, DC, USA',
            lookingFor: 'Angular.js, Django, ElasticSearch',
            postedDate: '4 April 2015',
            description: '',
            category: 'Engineer'
        };     
    },

    render: function() {
        return (
            <div>
                <h2 class="listing-company">
                    <span class="listing-company-name">{ this.state.company }</span>
                    <span class="listing-location">{ this.state.local }</span>
                </h2>
                <span class="listing-job-type">Looking for: { this.state.lookingFor }</span>
                <span class="listing-posted">Posted: { this.state.postedDate }</span>
                <span class="listing-company-category">{ this.state.category }</span>
            </div>
        );
    }
});
