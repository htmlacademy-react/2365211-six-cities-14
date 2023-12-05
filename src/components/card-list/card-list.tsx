import Card from '../cards/cards';

import Offer from '../../types/offer';


type OfferListProps = {
  elementType: 'cities' | 'favorite' | 'offers';
  offers: Array<Offer>;
  onCardHover: (offerId: Offer['id'] | null) => void;
}

function CardList({ elementType, onCardHover, offers }: OfferListProps) {
  return (
    <>
      {
        offers.map((offer) => (
          <Card
            elementType={elementType}
            offer={offer}
            key={offer.id}
            onCardHover={onCardHover}
          />
        ))
      }
    </>
  );
}

export default CardList;
