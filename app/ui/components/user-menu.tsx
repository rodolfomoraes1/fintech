"use client";

import * as React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { UserCircleIcon, EyeIcon, EyeSlashIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useUserInfo } from "@/app/context/userInfoContext";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks/useAccountInfo";
import { fetchAccount } from "@/app/store/slices/accountSlice";
import { AccountInfo } from "./account-info/account-info";

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { user } = useUserInfo();
  const dispatch = useAppDispatch();
  const { accountId, balance, status, error } = useAppSelector((state) => state.account);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);

  return (
    <div className="flex flex-row items-center space-x-2 gap-4">
      <AccountInfo
        userName={user?.name}
        accountId={accountId}
        balance={balance}
      />
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
