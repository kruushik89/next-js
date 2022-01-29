import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import StarIcon from './star.svg';
import {RatingProps} from "./Rating.props";
import styles from "./Rating.module.css";

export const Rating = ({rating, setRating, isEditable = false, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon key={i} className={cn(styles.star, {
                    [styles.filled]: i < currentRating
                })}/>
            )
        })
        setRatingArray(updateArray);
    }
    return (
        <div {...props}>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
};