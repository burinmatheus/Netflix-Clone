import Row from "../components/Row";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

import categories from "../api/tmdb";

export function Catalogo(){
    return (
        <>
            <Nav />
            <Banner/>
            {   
                categories.map(({ name, title, isLarge }) => { 
                    return <Row key={name} title={title} category={name} isLarge={isLarge}/>
                })
            }
        </>
    );
}