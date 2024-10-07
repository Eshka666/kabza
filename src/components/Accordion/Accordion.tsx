import React from "react";

export function Accordion() {
  return (
    <div>
    <AccordionTitlle />
    <AccordionBody />
    </div>
  );
}

export function AccordionTitlle() {
  return <h3>Menu</h3>;
}

export function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>3</li>
      <li>3</li>
    </ul>
  );
}

