'use client';

import { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '377726305000181',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0',
      });
    };

    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const responseFacebook = (response) => {
    localStorage.setItem('user', JSON.stringify(response));
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId="377726305000181"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        scope="ads_read,ads_management"
        disableMobileRedirect={true}
      />
    </div>
  );
};

export default FacebookLoginButton;
