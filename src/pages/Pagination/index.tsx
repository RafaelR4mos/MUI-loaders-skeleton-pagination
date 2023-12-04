import { useEffect, useState } from "react";
import { UsersResponse } from "../../utils/interfaces";
import { toast } from "react-toastify";
import { Breadcrumbs, Typography, Skeleton, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { UserCardSkeleton } from "../../components/UserCard/UserCardSkeleton";
import { UserCard } from "../../components/UserCard";

import styles from "./pagination.module.css";

export function PaginationContent() {
  const [userList, setUserList] = useState<UsersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setUserList(null);
  };

  async function fetchUsers(page: number, pageSize: number) {
    const url = `https://reqres.in/api/users?page=${page}&per_page=${pageSize}`;
    const fakeAPIDelay = 500;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }

      const data = await response.json();
      setTimeout(() => {
        //DELAY PROPOSITAL para simular espera da requisição
        setUserList(data);
      }, fakeAPIDelay);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    fetchUsers(page, 6);
  }, [page]);

  return (
    <div>
      <Breadcrumbs>
        <Link to="/" className="breadcrumbLink">
          Início
        </Link>
        <Typography fontWeight={700}>Pagination</Typography>
      </Breadcrumbs>
      <Typography
        variant="h3"
        component="h1"
        sx={{ color: "var(--black)", textAlign: "center", marginTop: "1.5rem" }}
      >
        Pagination
      </Typography>
      <div className={styles.usersContainer}>
        {userList?.data
          ? userList.data.map((user) => <UserCard userInfo={user} />)
          : isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <UserCardSkeleton key={i} />
            ))}
        {userList?.data ? (
          <Pagination
            count={userList.total_pages}
            page={page}
            onChange={handleChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              gridColumn: "span 2",
            }}
          />
        ) : (
          <Skeleton
            variant="rounded"
            width={180}
            height={35}
            sx={{
              margin: "0 auto",
              gridColumn: "span 2",
            }}
          />
        )}
      </div>
    </div>
  );
}
