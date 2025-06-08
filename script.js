// GSAP animations for intro section
window.addEventListener('load', () => {
  // Animate heading
  gsap.from(".intro h1", {
    y: -50,
    opacity: 0,
    duration: 1
  });

  // Animate subheading
  gsap.from(".intro p", {
    y: 50,
    opacity: 0,
    delay: 0.5,
    duration: 1
  });

  // Animate button
  gsap.from(".btn", {
    scale: 0,
    opacity: 0,
    delay: 1,
    duration: 0.75
  });
});
