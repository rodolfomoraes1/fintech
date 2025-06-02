"use client";

import * as React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useUserInfo } from "@/app/context/userInfoContext";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user, loading, error } = useUserInfo();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-row items-center space-x-2">
      {user?.name}
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
        <MenuItem onClick={() => alert("Minha Conta em contrução")}>
          Minha Conta
        </MenuItem>
        <MenuItem onClick={() => alert("Configurações em contrução")}>
          Configurações
        </MenuItem>
      </Menu>
    </div>
  );
}
