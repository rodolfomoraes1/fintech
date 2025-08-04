"use client";

import React, { ReactNode } from "react";
import {
  Modal as MuiModal,
  Box,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  marginRight: 1,
  marginLeft: 1,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
  height: "100%",
  width: {
    xs: 313, // mobile
    sm: 597, // tablet
    md: 792, // desktop
  },
};

const imageContainerStyle = {
  mb: 3,
  textAlign: "center",
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  image: { imageSrc: StaticImageData | string; imageAlt: string };
  title: string;
  ariaLabel: string;
  children: ReactNode;
}

export function Modal({
  open,
  onClose,
  image,
  title,
  ariaLabel,
  children,
}: ModalProps) {
  return (
    <MuiModal open={open} onClose={onClose} aria-labelledby={ariaLabel}>
      <Box sx={modalStyle} className="bg-white">
        <Box sx={imageContainerStyle}>
          <Image
            src={image.imageSrc}
            alt={image.imageAlt}
            width={330}
            height={267}
          />
        </Box>

        <Typography variant="h4" component="h2" fontWeight="bold">
          {title}
        </Typography>

        {children}
      </Box>
    </MuiModal>
  );
}
