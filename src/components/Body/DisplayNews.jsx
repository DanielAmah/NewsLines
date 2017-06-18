import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const WhatsappIcon = generateShareIcon('whatsapp');


export default class DisplayNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  render() {
    const obj = this.props.data.list;
    const sourceName = obj.source;
    const sourceData = this.props.data.list.articles;
    const title = 'News Link';
    return (

      <div>
        <div>
          <h3 className="panel-title text-center">
                   News links from {sourceName.replace(/-/g, ' ').toUpperCase()}
          </h3>
        </div>

        <div className="col-md-12 col-sm-12" id="News">
          {
                      Object.keys(sourceData).map(key =>
                      (<div className="col-md-6" id="articles" >
                        <div>
                        <img
                          key={[0]}
                          alt="Not Available"
                          src={(sourceData[key].urlToImage)}
                        />
                        </div>
                        <div><h1 key={[2]} id="title">{(sourceData[key].title).slice(0, 60) || 'not available'}</h1></div>
                        <div><p key={[1]} id="author">Author:&nbsp;&nbsp;{(sourceData[key].author) || 'not available'}</p></div>

                       <div id="description"><p key={[3]}>Description:&nbsp;&nbsp; {(sourceData[key].description) || 'not available'}</p></div>
                        <div><p key={[4]}>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={(sourceData[key].url)}
                          >
                            <button className="btn btn-danger">Read on Website</button>
                        </a>
                        </p>
                        </div>
                        <hr />
                        SHARE ON
                        <br /><br />
                        <div className="row">
                          <FacebookShareButton
                            url={(sourceData[key].url)}
                            title={title}
                            className="col-md-3 col-sm-3"
                          >
                            <FacebookIcon
                              size={32}
                              round
                            />
                          </FacebookShareButton>

                          <TwitterShareButton
                            url={(sourceData[key].url)}
                            title={title}
                            className="col-md-3 col-sm-3"
                          >
                            <TwitterIcon
                              size={32}
                              round
                            />
                          </TwitterShareButton>
                          <WhatsappShareButton
                            url={(sourceData[key].url)}
                            title={title}
                            separator=":: "
                            className="col-md-3 col-sm-3"
                          >
                            <WhatsappIcon size={32} round />
                          </WhatsappShareButton>

                          <GooglePlusShareButton
                            url={(sourceData[key].url)}
                            className="col-md-3 col-sm-3"
                          >
                            <GooglePlusIcon
                              size={32}
                              round
                            />
                          </GooglePlusShareButton>

                        </div>

                      </div>
                      ),
                    )
                    }
        </div>

      </div>

    );
  }
}

DisplayNews.propTypes = {
  data: PropTypes.oneOfType([
    React.PropTypes.obj,
  ]).isRequired,
};
