import Carousel from "./carousel/carousel";
import GridRow from "./grid-row/grid-row";
import Header from "./header/header";
import PictureBar from "./picturebar/picturebar";

export default function HomePage() {
    return <>
        <Header/>
        <PictureBar/>
        <Carousel/>
        <GridRow/>
    </>
}