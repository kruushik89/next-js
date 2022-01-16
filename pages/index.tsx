import {Button, Htag, P, Tag} from "../components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag="h1">Tag h1</Htag>
            <Button appearance="primary" arrow='right'>Кнопка</Button>
            <Button appearance="ghost" arrow='down'>Кнопка</Button>
            <P size='s'>Small</P>
            <P>Medium</P>
            <P size='l'>Large</P>
            <Tag color='red' size='m'>Medium</Tag>
        </div>
    )
}
