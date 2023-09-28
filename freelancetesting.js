
  function render() {

    const freelancers = [
        { name: 'Robert', service: 'Painter', price: '$40' },
        { name: 'Skye', service: 'Environmental Research', price: '$80' },
        { name: 'Raul', service: 'Personal Training', price: '$35' },
        { name: 'Justin', service: 'Mover', price: '$100' },
        { name: 'Lorna', service: 'Care Taker', price: '$60' },
      ];
  
    const communityBoard = document.querySelector('#Community-board');
    const freelancerElements = freelancers.map((freelancer) => {
      const element = document.createElement('li');
      const className = `${freelancer.name}-${freelancer.service}-${freelancer.price}`;
      element.classList.add(className);
      return element;
    });
  
    communityBoard.replaceChildren(...freelancerElements);
  };
  
 render();

  setInterval(() => {
    const newFreelancer = { name: 'Carol', service: 'Programmer', price: '$70' };
    freelancers.push(newFreelancer);
  }, 10);