"use client";

import React, { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { Box, TextField, Typography, Alert } from "@mui/material";
import { Button } from "./button";
import { Modal } from "./modal";

const image = {
  imageSrc: "/fintech/login.png",
  imageAlt: "Homem fazendo login na aplicação",
};

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      ariaLabel="login-modal-title"
      image={image}
      title="Login"
    >
      <Box
        component="form"
        action={formAction}
        className="w-full flex flex-col gap-4 pt-12"
      >
        <Typography fontWeight="bold">Email</Typography>
        <TextField
          id="outlined-basic"
          label="Digite seu email"
          name="email"
          type="email"
          variant="outlined"
          required
        />

        <Typography fontWeight="bold">Senha</Typography>
        <TextField
          fullWidth
          label="Digite sua senha"
          name="password"
          type="password"
          required
          variant="outlined"
        />

        <Box display="flex" justifyContent="center">
          <Button type="submit" variant="primary" disabled={isPending}>
            {isPending ? "Carregando..." : "Acessar"}
          </Button>
        </Box>
        <input type="hidden" name="redirectTo" value={callbackUrl} />

        {errorMessage && (
          <Alert severity="error">
            <Typography variant="body2" component="span">
              {errorMessage}
            </Typography>
          </Alert>
        )}
      </Box>
    </Modal>
  );
}
