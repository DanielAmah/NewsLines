import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

/**
 * @description declares share button variables
 * @method {void}
 * @returns {void}
 */
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

/**
 * @function Share
 * @param {any} props
 * @returns{div} sharebuttons
 */

const Share = (props) => {
  const shareUrl = props.share;
  const title = props.title;
  return (
              <div className="row text-center">
                     <div className="col-md-2 col-sm-2 col-lg-2">
                          <FacebookShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button"
                          >
                            <FacebookIcon
                              size={32}
                              round
                            />
                          </FacebookShareButton>
                          </div>
                          <div className="col-md-2 col-sm-2 col-lg-2">
                          <TwitterShareButton
                            url={shareUrl}
                            title={title}
                             className="Demo__some-network__share-button"
                          >
                            <TwitterIcon
                              size={32}
                              round
                            />
                          </TwitterShareButton>
                          </div>
                           <div className="col-md-2 col-sm-2 col-lg-2">
                          <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            separator=":: "
                             className="Demo__some-network__share-button"
                          >
                        
                            <WhatsappIcon size={32} round />
                          </WhatsappShareButton>
                            </div>
                          <div className="col-md-2 col-sm-2 col-lg-2"> 
                          <GooglePlusShareButton
                            url={shareUrl}
                            className="Demo__some-network__share-button"
                          >
                          
                            <GooglePlusIcon
                              size={32}
                              round
                            />
                          </GooglePlusShareButton>
                          </div>
                        </div>
                         );
                      };
/**
 * Default Props
 */
Share.defaultProps = {
  share: '',
  title: ''
};

/**
 * Set props
 */
Share.propTypes = {
  share: PropTypes.string,
  title: PropTypes.string
};

export default Share;
