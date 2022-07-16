import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import Axios from 'axios';
import { BACKEND_URL } from 'config';
import { NextPageContext } from 'next';
import Cookies from 'cookies';

export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    static async getInitialProps(ctx: NextPageContext) {
      try {
        // Ensures material-ui renders the correct css prefixes server-side
        const cookies = new Cookies(ctx.req);
        const decoded: any = cookies.get('accessToken')
          ? jwtDecode(cookies.get('accessToken'))
          : '';

        let userData: any = null;

        if (decoded) {
          const config = {
            headers: { Authorization: `Bearer ${cookies.get('accessToken')}` },
          };

          userData = await Axios.get(
            `${BACKEND_URL}/auth/${decoded.user_id}`,
            config
          );
        }

        let userAgent;

        if (process.browser) {
          userAgent = navigator.userAgent;
        } else {
          userAgent = ctx.req.headers['user-agent'];
        }

        const pageProps =
          AuthComponent.getInitialProps &&
          (await AuthComponent.getInitialProps(ctx));
        // Return props.
        return { ...pageProps, userAgent, user: userData.data };
      } catch (e) {
        // 잘못된 토큰이라면 me = null , token 제거 해버리는것도 고려중
        return { me: null };
      }
    }

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     isLoading: true,
    //   };
    // }

    // componentDidMount() {
    //   this.setState({ isLoading: false });
    // }

    render() {
      return (
        <div>
          <AuthComponent {...this.props} />
        </div>
      );
    }
  };
}
