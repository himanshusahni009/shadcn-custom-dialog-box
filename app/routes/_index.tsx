import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import CustomDialogBoxSide from "~/components/CustomDialogBoxSide";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // UseState for Handle Dialog Box from Parent
  const [isOpen, setIsOpen] = useState(false);

  // Functions for Handling Opening and Closing functionality for Dialog Box
  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>

      {/* Custom Button for Opening Dialog box. Note this button is part of Parent */}
      <button type="button" onClick={handleOpen}>
        Open Dialog Box
      </button>

      {/* Custom Dialog Box */}
      <CustomDialogBoxSide isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}
