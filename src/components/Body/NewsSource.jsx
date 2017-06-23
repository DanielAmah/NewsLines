import React from 'react';
import request from 'superagent';
import PropTypes from 'prop-types';
/**
 * @export
 * @class NewsSource
 * @extends {React.Component}
 * get sources from the API call to a select input
 * pass the selected value to a handle change method.
 */
export default class NewsSource extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { source: 'cnn', newsSources: [] };
  }
  componentDidMount() {
    this.serverRequest = request.get('https://newsapi.org/v1/sources?language=en')
    .end((error, response) => {
      if (error) {
        return error;
      }
      this.setState({
        newsSources: response.body.sources,
        source: response.body.sources[0].id,
      });
      return response.body;
    });
  }


  handleChange(event) {
    this.setState({
      source: event.target.value,
    });
    this.props.getSource(event.target.value);
  }
  render() {
    const source = this.state.newsSources.map(sources =>
               (
                 <option key={sources.id} value={sources.id}> {sources.name} </option>
               ),
        );
    return (
      <div className="form-group text-center">
        <label htmlFor>Sources</label>
        <div className="col-sm-12">
          <select
            defaultValue={this.state.source}
            onChange={this.handleChange}
            className="form-control"
          >
            {source}
          </select>
        </div>
      </div>
    );
  }
}
NewsSource.propTypes = {
  getSource: PropTypes.func.isRequired,
};
