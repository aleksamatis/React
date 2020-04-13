import React from 'react';

export default class FooterItem extends React.Component {
    render() {
        return <div class="col-xl-4 col-md-6 col-sm-6">
          <h1 class="header_sfooter">{this.props.header}<hr/></h1>
          <ul class="sub_sfooter">
            {this.props.children}
          </ul>
      </div>;
    }
}