import Card from './Card1';

function CardWrapper() {
  const cardData = {
    title: 'Reusable Card Component',
    description: 'some description',
  };

  return (
    <div>
      <Card title={cardData.title} description={cardData.description} />
    </div>
  );
}

export default CardWrapper;