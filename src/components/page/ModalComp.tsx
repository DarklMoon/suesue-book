import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Props = {};

const Modal = ({isVisible, onClose }) => {
  if (!isVisible) return null;
    return (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col">
                <div className="font-white place-self-end" onClick={() => onClose()}>
                    X
                </div>
                <div className="bg-white p-2">
                    Modal
                </div>
            </div>
          </div>
        </>
      );
};

export default Modal;