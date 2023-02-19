import { useState } from "react";

export const Section = (props) => {
  const { children, initialOpen } = props;

  const [open, setOpen] = useState(initialOpen);
  const collapse = () => setOpen(false);
  const expand = () => setOpen(true);

  if (open) {
    return (
      <div>
        <button onClick={collapse}>Collapse</button>
        {children}
      </div>
    );
  }

  return (
    <div>
      {open && <button onClick={collapse}>Collapse</button>}
      {!open && <button onClick={expand}>Expand</button>}
      {open && children}
    </div>
  );
};
