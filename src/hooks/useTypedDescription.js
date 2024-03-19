"use client";
import { useEffect, useState } from "react";

const TYPING_INTERVAL = 200;
const PAUSE_INTERVAL = 1000;
const DELETING_INTERVAL = 100;

const useTypedDescription = (descriptionList) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [typedDescription, setTypedDescription] = useState("");
  const [phase, setPhase] = useState("Typing");

  useEffect(() => {
    switch (phase) {
      case "Typing": {
        const nextTypedDescription = descriptionList[selectedIndex].slice(
          0,
          typedDescription.length + 1
        );
        if (nextTypedDescription === typedDescription) {
          setPhase("Pausing");
          return;
        }
        const timeout = setTimeout(() => {
          setTypedDescription(nextTypedDescription);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case "Deleting": {
        if (!typedDescription) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(descriptionList[nextIndex] ? nextIndex : 0);
          setPhase("Typing");
          return;
        }

        const nextRemaining = descriptionList[selectedIndex].slice(
          0,
          typedDescription.length - 1
        );
        const timeout = setTimeout(() => {
          setTypedDescription(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case "Pausing":
      default:
        const timeout = setTimeout(() => {
          setPhase("Deleting");
        }, PAUSE_INTERVAL);

        return () => clearTimeout(timeout);
    }
  }, [typedDescription, descriptionList, phase, selectedIndex]);
  return {
    typedDescription,
    phase,
    selectedDescription: descriptionList[selectedIndex],
  };
};

export default useTypedDescription;
