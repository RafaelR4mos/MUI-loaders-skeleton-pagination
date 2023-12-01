import {
  Box,
  Breadcrumbs,
  CircularProgress,
  LinearProgress,
  Switch,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserType } from "../../utils/interfaces";
import { UserCard } from "../../components/UserCard";

import styles from "./simpleLoading.module.css";

export function SimpleLoading() {
  const [isCircularloading, setIsCircularloading] = useState(true);
  const [userList, setUserList] = useState<UserType[]>([]);

  async function fetchUsers() {
    const url = "https://reqres.in/api/users";
    const fakeAPIDelay = 1000;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }

      const data = await response.json();
      setTimeout(() => {
        //DELAY PROPOSITAL para simular espera da requisição
        setUserList(data.data);
      }, fakeAPIDelay);
    } catch (error) {
      toast.error(`${error}`);
    }
  }

  function handleSwitchLoadingType() {
    setIsCircularloading((state) => !state);
    setUserList([]); //Limpa a lista para que o loading mude
  }

  useEffect(() => {
    fetchUsers();
  }, [isCircularloading]);

  return (
    <div>
      <Breadcrumbs>
        <Link to="/" className="breadcrumbLink">
          Início
        </Link>
        <Typography fontWeight={700}>Simple Loading</Typography>
      </Breadcrumbs>
      <Typography
        variant="h3"
        component="h1"
        sx={{ color: "var(--black)", textAlign: "center", marginTop: "1.5rem" }}
      >
        Simple Content Loading
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Typography
          color={!isCircularloading ? "var(--light-blue)" : "var(--dark-blue)"}
        >
          Linear
        </Typography>
        <Switch checked={isCircularloading} onClick={handleSwitchLoadingType} />
        <Typography
          color={isCircularloading ? "var(--light-blue)" : "var(--dark-blue)"}
        >
          Circular
        </Typography>
      </Box>

      {userList.length > 0 ? (
        <div className={styles.usersContainer}>
          {userList.map((user) => (
            <UserCard key={user.id} userInfo={user} />
          ))}
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          {isCircularloading && (
            <CircularProgress
              sx={{
                marginTop: "4rem",
              }}
            />
          )}

          {!isCircularloading && (
            <LinearProgress
              sx={{
                marginTop: "4rem",
                flex: 1,
              }}
            />
          )}
        </Box>
      )}
    </div>
  );
}
