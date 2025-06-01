"use client";

import * as React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    //signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex flex-row items-center space-x-2">
      User
      <IconButton onClick={handleOpen} className="p-0">
        <UserCircleIcon className="h-10 w-10 text-secondary hover:text-gray-900" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => alert("Ir para configurações")}>
          Minha Conta
        </MenuItem>
        <MenuItem onClick={() => alert("Ir para configurações")}>
          Configurações
        </MenuItem>
      </Menu>
    </div>
  );
}
