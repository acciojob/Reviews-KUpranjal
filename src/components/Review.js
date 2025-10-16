import { useState } from 'react';

const Review = () => {
  const data = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
  ];

  const [curr, setCurr] = useState(0);

  const prevPerson = () => {
    setCurr(curr === 0 ? data.length - 1 : curr - 1);
  };

  const nextPerson = () => {
    setCurr(curr === data.length - 1 ? 0 : curr + 1);
  };

  const surpriseMe = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    while (randomNumber === curr) {
      randomNumber = Math.floor(Math.random() * data.length);
    }
    setCurr(randomNumber);
  };

  return (
    <div className='review'>
      <p id={`author-${data[curr].id}`} className='author'>
        {data[curr].name}
      </p>
      <p className='job'>{data[curr].job}</p>
      <p className='info'>{data[curr].text}</p>
      <img className='person-img' src={data[curr].image} alt={data[curr].name} />

      <button className='prev-btn' onClick={prevPerson}>
        Previous
      </button>

      <button className='next-btn' onClick={nextPerson}>
        Next
      </button>

      <button className='random-btn' onClick={surpriseMe}>
        Surprise me
      </button>
    </div>
  );
};

export default Review;
