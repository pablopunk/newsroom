import React from 'react';
import PropTypes from 'prop-types';

import { gettext, fullDate } from 'utils';

export default function Preview(props) {
    return (
        <div className='wire-column__preview__items'>
            <div className="wire-column__preview__top-bar pt-2 pb-0">
                <div className='wire-column__preview__date'>{gettext('Published')}{' '}{fullDate(props.published)}</div>
                <button className="icon-button" onClick={props.onCloseClick}>
                    <i className="icon--close-thin icon--gray"></i>
                </button>
            </div>

            <div className="wire-column__preview__mobile-bar">
                <button className="icon-button" onClick={props.onCloseClick}>
                    <i className="icon--close-large"></i>
                </button>
            </div>
            {props.children}
        </div>
    );
}

Preview.propTypes = {
    children: PropTypes.node,
    published: PropTypes.string,
    onCloseClick: PropTypes.func.isRequired,
};