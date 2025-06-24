import Marq_Wrap from "./marquee_wrapper";
import Card from "./card";

type cardsProps = {
  images: {
    title: string;
    type: string;
    address: string;
    path: string;
  }[];
};

const Cards = ({ images }: cardsProps) => {
  return (
    <Marq_Wrap>
      <Card images={images} />
      <Card images={images} />
    </Marq_Wrap>
  );
};

export default Cards;
