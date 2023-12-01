import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { UserType } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";

interface UserCardTypes {
  userInfo: UserType;
}

export function UserCard({ userInfo }: UserCardTypes) {
  const navigate = useNavigate();

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="strong">
            {userInfo.last_name}
          </Typography>

          <Avatar
            alt={`${userInfo.first_name} ${userInfo.last_name}`}
            src={userInfo.avatar}
          />
        </Box>

        <Typography color="text.secondary" component="div">
          Email: {userInfo.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate("user/post")}>Confira post</Button>
      </CardActions>
    </Card>
  );
}
