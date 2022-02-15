import {useState} from "react";
import axios from "axios";
import {Button, Htag, P, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}:HomeProps): JSX.Element {
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
            <ul>
                {menu.map(m => {
                    return (
                        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
