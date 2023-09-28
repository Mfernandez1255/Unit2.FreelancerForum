const freelancers = [
    {name: 'Robert', service: 'Painter', price: '$40'},
    {name: 'Skye', service: 'Environmental Research', price: '$80'},
    {name: 'Raul', service: 'Personal Training', price: '$35'},
    {name: 'Justin', service: 'Mover', price: '$100'},
    {name: 'Lorna', service: 'Care Taker', price: '$60'}
];

//const userChoice = window.prompt('Here we have many freelancers ready to help you achieve what you need');
function render() {
    const communityBoard = document.querySelector('#Community-board');
    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement('li');
        element.classList.add(freelancer.name, freelancer.service, freelancer.price);
        return element;
    });
    
communityBoard.replaceChildren(...freelancerElements);









} 

