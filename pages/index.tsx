import {Button, Htag, P, Rating, Tag} from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState(1);
    return (
        <div>
            <Htag tag="h1">Tag h1</Htag>
            <Button appearance="primary" arrow='right'>Кнопка</Button>
            <Button appearance="ghost" arrow='down'>Кнопка</Button>
            <P size='s'>Small</P>
            <P>Medium</P>
            <P size='l'>Large</P>
            <Tag color='red' size='m'>Medium</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </div>
    )
}
