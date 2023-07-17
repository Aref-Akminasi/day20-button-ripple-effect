const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX; //Set the coordinates of where the event has taken place
    const y = e.clientY;
    const buttonTop = e.target.offsetTop; //Set the coordinates of the button itself
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft; //Calculating the click inside the button
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500); //Remove the child from the button parent after the animation
  });
});
