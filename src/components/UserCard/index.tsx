import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { userType } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";

interface UserCardTypes {
  userInfo: userType;
}

export function UserCard({ userInfo }: UserCardTypes) {
  const navigate = useNavigate();

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="strong">
          {userInfo.name}
        </Typography>

        <Typography color="text.secondary" component="div">
          Email: {userInfo.email}
        </Typography>

        <Typography color="text.secondary" component="div">
          Username: {userInfo.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate("user/post")}>Confira post</Button>
      </CardActions>
    </Card>
  );
}
