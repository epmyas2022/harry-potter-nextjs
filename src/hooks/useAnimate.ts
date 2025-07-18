export function useTransitionAnimate() {
  const slideInOut = () => {
    // Animate the old content sliding out
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
        {
          opacity: 0,
          transform: "translate(-100px, 0)",
        },
      ],
      {
        duration: 400,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    // Animate the new content sliding in
    document.documentElement.animate(
      [
        {
          opacity: 0,
          transform: "translate(100px, 0)",
        },
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
      ],
      {
        duration: 400,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return {
    slideInOut,
  };
}
