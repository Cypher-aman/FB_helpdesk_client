'use client';

import { GQLClient } from '@/clients/api';
import { CreateFBConnectionMutation } from '@/graphql/mutations/page';
import { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = ({ setPages, setLoading }) => {
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

  const responseFacebook = async (response) => {
    if (response.status === 'unknown') {
      return null;
    }
    const { createFBConnection: pagesData } = await GQLClient.request(
      CreateFBConnectionMutation,
      {
        token: response.accessToken,
      }
    );

    setPages(pagesData);
    setLoading(false);
    console.log('pages', pagesData);
  };

  return (
    <div>
      <FacebookLogin
        appId="377726305000181"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        scope="pages_show_list, pages_messaging, pages_messaging_subscriptions, pages_read_engagement, pages_manage_metadata"
        disableMobileRedirect={true}
        textButton="Connect Pages"
        cssClass="facebook-btn"
      />
    </div>
  );
};

export default FacebookLoginButton;
