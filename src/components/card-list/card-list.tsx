import Cards from '../cards/cards';

import Offer from '../../types/offer';


type OfferListProps = {
  elementType: 'cities' | 'favorite';
  offers: Array<Offer>;
}

function CardList({ elementType, offers }: OfferListProps) {
  return (
    <>
      {
        offers.map((offer) => (
          <Cards elementType={elementType} offer={offer} key={offer.id} />
        ))
      }
    </>
  );
}

export default CardList;
