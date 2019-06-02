import React, {Component} from 'react';



 class GoogleAds extends Component {
  componentDidMount () {
    
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      
          <ins className="adsbygoogle"
          google_ad_client= "ca-pub-6197894649862198"
          enable_page_level_ads= "true" />
    );
  }
}
 
  
 export default GoogleAds;