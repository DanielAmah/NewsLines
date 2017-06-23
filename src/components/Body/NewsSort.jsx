import React from 'react';
import PropTypes from 'prop-types';
/**
 * @export
 * @class NewsSort
 * @extends {React.Component}
 * Get the sort value from the select input and pass to a handleChange method.
 */


export default class NewsSort extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { sort: 'top' };
  }
  handleChange(event) {
    this.setState({
      sort: event.target.value,
    });
    this.props.getSort(event.target.value);
  }
  render() {
    return (
      <div className="form-group text-center">
        <label htmlFor>sort</label>
        <div className="col-sm-12">
          <select
            className="form-control"
            defaultValue={this.state.sort}
            onChange={this.handleChange}
          >
            <option>Top</option>
            <option>Latest</option>
          </select>
        </div>
      </div>
    );
  }
}
NewsSort.propTypes = {
  getSort: PropTypes.func.isRequired,
};
