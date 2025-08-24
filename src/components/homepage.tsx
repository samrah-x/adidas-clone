import Carousel from "./carousel/carousel";
import GridRow from "./grid-row/grid-row";
import PictureBar from "./picturebar/picturebar";

export default function HomePage() {
    return <>
        <PictureBar/>
        <Carousel/>
        <GridRow/>
    </>
}