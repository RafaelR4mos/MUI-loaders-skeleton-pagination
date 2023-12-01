import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./home.module.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardsContainer}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h1">
              Button loading
            </Typography>

            <p>
              Usado em conjunto com um formulário. Indica que a requisição foi
              solicitada e que está sendo processada.
            </p>
          </CardContent>

          <CardActions onClick={() => navigate("btn-loading")}>
            <Button endIcon={<ArrowRightIcon />}>Confira o exemplo</Button>
          </CardActions>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="strong">
              Simple content loading
            </Typography>

            <p>
              Usado para indicar está ocorrendo um estado de carregamento de
              conteúdos. O estado de carregamento é representado pela rotação de
              um círculo animado
            </p>
          </CardContent>

          <CardActions onClick={() => navigate("simple-loading")}>
            <Button endIcon={<ArrowRightIcon />}>Confira o exemplo</Button>
          </CardActions>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="strong">
              Linear loading/Progress Bar
            </Typography>

            <p>
              Usado para indicar está ocorrendo um estado de carregamento de
              conteúdos. O estado de carregamento é representado por uma prévia
              linha vertical que pode ter uma animação infinita ou até mesmo
              representando o status ou porcentagem atual da requisição para ser
              concluída.
            </p>
          </CardContent>

          <CardActions onClick={() => navigate("linear-loading")}>
            <Button endIcon={<ArrowRightIcon />}>Confira o exemplo</Button>
          </CardActions>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="strong">
              Skeleton loading
            </Typography>

            <p>
              Usado para indicar está ocorrendo um estado de carregamento de
              conteúdos. O estado de carregamento é representado por uma prévia
              em baixa fidelidade dos conteúdos da página.
            </p>
          </CardContent>

          <CardActions onClick={() => navigate("skeleton-loading")}>
            <Button endIcon={<ArrowRightIcon />}>Confira o exemplo</Button>
          </CardActions>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="strong">
              Paginação
            </Typography>

            <p>
              Usado para executar requisições sob demanda e evitar o consumo de
              conteúdo desnecessário para o usuário. Basicamente, as informações
              são divididas em páginas. Ao usuário ir para a próxima página ou
              anterior renderiza o novo conteúdo solicitado. Auxilia no processo
              de carregamento rápida de uma página WEB
            </p>
          </CardContent>

          <CardActions onClick={() => navigate("pagination")}>
            <Button endIcon={<ArrowRightIcon />}>Confira o exemplo</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
