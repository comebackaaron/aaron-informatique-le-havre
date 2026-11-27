import React, { useState } from "react";

export const Accordion = ({ type = "single", collapsible = true, defaultValue, className = "", children }) => {
  const [openValue, setOpenValue] = useState(defaultValue || null);

  return (
    <div className={className} data-accordion-type={type}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          openValue,
          setOpenValue,
          collapsible,
        });
      })}
    </div>
  );
};

export const AccordionItem = ({ value, className = "", children, openValue, setOpenValue, collapsible, ...props }) => {
  const isOpen = openValue === value;

  return (
    <div className={className} data-state={isOpen ? "open" : "closed"} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          isOpen,
          toggle: () => {
            if (isOpen && collapsible) {
              setOpenValue(null);
            } else {
              setOpenValue(value);
            }
          },
        });
      })}
    </div>
  );
};

export const AccordionTrigger = ({ className = "", children, isOpen, toggle, ...props }) => {
  return (
    <button
      type="button"
      onClick={toggle}
      className={`flex w-full items-center justify-between ${className}`}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <svg
        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </button>
  );
};

export const AccordionContent = ({ className = "", children, isOpen, ...props }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
      {...props}
    >
      <div className={className}>{children}</div>
    </div>
  );
};
