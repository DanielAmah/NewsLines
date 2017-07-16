import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

/**
*
* @param  {string} const { {declare all sharebutton variables and assign a value of sharebuttons}
* @return {void}
*/
const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} = ShareButtons;

/**
* @function Declare multiple function
* @param  {function} 'facebookicon',twittericon,googleicon, whatsappicon {declare generateshareicon}
* @return {void}
*/
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const WhatsappIcon = generateShareIcon('whatsapp');

/**
* @function Share
* @param  {string} props {pass share and title as props to the share function}
* @return {string} {returns the url, title and icon for declared functions above}
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
* @param  {object} Share.defaultProps = { {set default props}
* @return {object} {a key value pair showing empty values for props}
*/
Share.defaultProps = {
  share: '',
  title: ''
};

/**
* @param  {object} Share.propTypes = { {set prop type}
* @return {object} {set prop datatypes}
*/
Share.propTypes = {
  share: PropTypes.string,
  title: PropTypes.string
};

export default Share;
