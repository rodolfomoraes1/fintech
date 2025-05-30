"use client";

import React from "react";
import { AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useTheme } from "@mui/material/styles";
import UserMenu from "./user-menu";

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar position="static" className="!bg-dark">
      <Toolbar className="flex justify-between px-4">
        <div className="flex items-center">
          <div className="block sm:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Bars3Icon className="h-10 w-10 text-secondary" />
            </IconButton>
          </div>
        </div>

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
