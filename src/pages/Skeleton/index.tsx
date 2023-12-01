import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./skeleton.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserType } from "../../utils/interfaces";
import { UserCard } from "../../components/UserCard";
import { UserCardSkeleton } from "../../components/UserCard/UserCardSkeleton";

export function Skeleton() {
  const [userList, setUserList] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    } finally {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Breadcrumbs>
        <Link to="/" className="breadcrumbLink">
          Início
        </Link>
        <Typography fontWeight={700}>Skeleton Loading</Typography>
      </Breadcrumbs>
      <Typography
        variant="h3"
        component="h1"
        sx={{ color: "var(--black)", textAlign: "center", marginTop: "1.5rem" }}
      >
        Skeleton Content Loading
      </Typography>
      <div className={styles.usersContainer}>
        {userList.length > 0
          ? userList.map((user) => <UserCard userInfo={user} />)
          : isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <UserCardSkeleton key={i} />
            ))}
      </div>
    </div>
  );
}
