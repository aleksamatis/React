import React from 'react';

export default class BodyItem extends React.Component {
    render() {
        const image = <div><img src={this.props.img} width="100%"/></div>;
        const text =
        <div class="text_container text_left" >
            <h1 class="header">{this.props.header}<hr/></h1>
            <p class="text_block">{this.props.children}</p>
        </div>
        if (this.props.imageOnRight) {
            return <div class="s_split_row">
                {text}
                {image}
            </div>;
        }
        else {
            return <div class="s_split_row">
                {image}
                {text}
            </div>;
        }
    }
}