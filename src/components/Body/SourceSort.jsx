import React from 'react';
import NewsSource from './NewsSource.jsx';
import NewsSort from './NewsSort.jsx';
import DisplayNews from './DisplayNews.jsx';
import NewsStore from '../../store/NewsStore';
import Newsaction from '../../Actions/NewsAction';

export default class SourceSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: '', sort: '', info: '', showResults: false };
    this.newSource = this.newSource.bind(this);
    this.newSort = this.newSort.bind(this);
    this.getNews = this.getNews.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    NewsStore.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ info: NewsStore.getList(), showResults: true });
  }
  getNews() {
    Newsaction.receiveArticle(this.state.source, this.state.sort);
  }
  newSource(newState) {
    this.setState({ source: newState });
  }
  newSort(newState) {
    this.setState({ sort: newState });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <NewsSource className="newsSource"getSource={newState => this.newSource(newState)} />
            </div>
            <div className="col-md-5">
              <NewsSort getSort={newState => this.newSort(newState)} />
            </div>
            <div className="col-md-2" style={{ marginTop: 24 }}>
              <button
                onClick={this.getNews}
                className="btn btn-danger"
              >
                <b>Read News</b>
              </button>
            </div>
          </div>
        </div>
        {this.state.showResults ? <DisplayNews data={this.state.info} /> : null}
      </div>
    );
  }
}
