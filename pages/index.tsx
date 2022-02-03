import {useState} from "react";
import {Button, Htag, P, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
    const [rating, setRating] = useState(1);
    return (
        <>
            <Htag tag="h1">Tag h1</Htag>
            <Button appearance="primary" arrow='right'>Кнопка</Button>
            <Button appearance="ghost" arrow='down'>Кнопка</Button>
            <P size='s'>Small</P>
            <P>Medium</P>
            <P size='l'>Large</P>
            <Tag color='red' size='m'>Medium</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    )
}

export default withLayout(Home);