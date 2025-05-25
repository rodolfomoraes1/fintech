"use client";

import React, { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { Button } from "./button";
import { Modal } from "./modal";
import { Alert, Box, TextField, Typography } from "@mui/material";

const image = {
  imageSrc: "/fintech/register.png",
  imageAlt: "Mulher ao lado de um computador com um cadeado no canto superior",
};

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export function RegisterModal({ open, onClose }: RegisterModalProps) {
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
      ariaLabel="register-modal-title"
      image={image}
      title="Preencha os campos abaixo para criar sua conta corrente!"
    >
      <Box
        component="form"
        action={formAction}
        className="w-full flex flex-col gap-4 pt-12"
      >
        <Typography fontWeight="bold">Nome</Typography>
        <TextField
          id="outlined-basic"
          label="Digite seu nome"
          name="nome"
          type="text"
          variant="outlined"
          required
        />

        <Typography fontWeight="bold">Email</Typography>
        <TextField
          fullWidth
          label="Digite seu email"
          name="email"
          type="email"
          required
          variant="outlined"
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
          <Button type="submit" variant="primary" disabled={true}>
            Criar conta
          </Button>
        </Box>

        <Alert severity="warning">
          <Typography variant="body2" component="span">
            Em construção
          </Typography>
        </Alert>
      </Box>
    </Modal>
  );
}
