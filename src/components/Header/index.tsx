import { Button, ButtonGroup, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import styles from "./header.module.css";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.headerContainer}>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        startIcon={<HomeIcon />}
      >
        <Typography sx={{ fontSize: "1.25rem" }} component="span">
          Início
        </Typography>
      </Button>

      <nav>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ flexWrap: "wrap" }}
        >
          <Button onClick={() => navigate("btn-loading")}>Btn Loading</Button>
          <Button onClick={() => navigate("simple-loading")}>
            Simple loadings
          </Button>
          <Button onClick={() => navigate("skeleton-loading")}>
            Skeleton Loading
          </Button>
          <Button onClick={() => navigate("pagination")}>Pagination</Button>
        </ButtonGroup>
      </nav>
    </header>
  );
}
