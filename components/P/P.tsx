import React from 'react';
import cn from 'classnames';

import {PProps} from "./P.props";

import styles from "./P.module.css";

export const P = ({children, size = 'm', className, ...props}: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.small]: size === 's',
            [styles.medium]: size === 'm',
            [styles.large]: size === 'l',
        })}
           {...props}
        >{children}</p>
    )
};