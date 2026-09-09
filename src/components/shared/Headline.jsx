import React from "react";

const Headline = ({
  title,
  highlight,
  subtitle,
  center = true,
  titleAs = "h1",
  breakLine = false,
  className = "",
}) => {
  const Tag = titleAs;
  const textAlign = center ? "text-center" : "";
  const mx = center ? "mx-auto" : "";

  return (
    <div className={`relative ${className}`}>
      {/* Glow blob — always visible behind the heading on every page */}
      <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 rounded-full bg-primary/20 blur-[130px]" />
      <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 rounded-full bg-secondary/10 blur-[80px]" />

      <div className={`relative space-y-4 ${textAlign}`}>
        {/* Title */}
        <Tag className="scroll-m-20 sm:text-3xl text-2xl md:text-4xl font-semibold tracking-tight  leading-tight">
          {title}
          {breakLine && <br />}
          {highlight && (
            <>
              {" "}
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          )}
        </Tag>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`leading-relaxed text-muted-foreground text-base lg:text-lg max-w-2xl mt-2 ${mx}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Headline;
