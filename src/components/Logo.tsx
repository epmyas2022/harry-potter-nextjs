import { forwardRef } from "react";

interface Options {
  className?: string;
  ref?: React.Ref<HTMLHeadingElement>;
}

const Logo = forwardRef<HTMLHeadingElement, Options>(({ className }, ref) => {
  return (
    <h1
      className={`text-white text-4xl font-harry-potter background-image-text ${className}`}
      ref={ref}
    >
      Harry Potter API
    </h1>
  );
});

Logo.displayName = "Logo";

export default Logo;
