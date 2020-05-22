import React, {Component} from 'react';
import PropTypes from "prop-types";

class NewComponent extends Component {
    render() {
        const { name, children } = this.props;
        return(
            <div>
                안녕리액트컴포넌트나는 {name}
                <br/>
                칠드런은{children}
            </div>
        )
    }
}


NewComponent.propTypes = {
  name: PropTypes.string,
};

export default NewComponent;