import {
  Breadcrumbs,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import styles from "./BtnLoading.module.css";

interface UserData {
  email: string;
  password: string;
}

export function BtnLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<UserData>();

  async function loginUser(userData: UserData) {
    try {
      setIsLoading(true);

      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }

      toast.success("Login realizado com sucesso!");
    } catch (error) {
      toast.error(`${error}`);
      reset();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Breadcrumbs>
        <Link to="/" className={styles.breadcumbLink}>
          Início
        </Link>
        <Typography fontWeight={700}>BtnLoading</Typography>
      </Breadcrumbs>
      <Typography
        variant="h3"
        component="h1"
        sx={{ color: "var(--black)", textAlign: "center" }}
      >
        Btn Loading
      </Typography>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CardContent>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(loginUser)}
          >
            <Typography variant="h4" mb={2}>
              Teste Requisição login
            </Typography>
            <TextField
              type="email"
              label="E-mail"
              required
              placeholder="email@example.com"
              autoFocus
              id="email"
              {...register("email")}
            />
            <TextField
              type="password"
              label="senha"
              required
              placeholder="sua senha"
              {...register("password")}
            />

            <LoadingButton
              type="submit"
              loadingPosition="center"
              // loadingIndicator="loading..." é possível utilizar texto
              loading={isLoading}
              variant="contained"
              sx={{ marginTop: "1.5rem" }}
            >
              Efetuar login
            </LoadingButton>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
