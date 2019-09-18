import React from 'react';
import styleClasses from './Layout.module.css';
import News from '../../containers/News/News';

const Layout = props => {
    return (
        <div className={styleClasses.Layout}>
            <News />
        </div>
    );
};

export default Layout;