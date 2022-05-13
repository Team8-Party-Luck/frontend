import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { history } from "../../redux/configStore";

const UserCard = ({ v }) => {
  const age = v.age;
  const gender = v.gender;
  const imageUrl = v.imageUrl;
  const location = v.location;
  const nickname = v.nickname;

  return (
    <div>
      <AccordionSummary>
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt="Remy Sharp"
            src={imageUrl}
            sx={{ my: "auto", mr: "1rem", width: "3.5rem", height: "3.5rem" }}
          />
          <div>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              {nickname}
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>
              {gender} {age} {location}
            </Typography>
          </div>
        </Box>
      </AccordionSummary>
      <div>
        <Button sx={{ml:'5rem'}}>메시지</Button>
      </div>
    </div>
  );
};

export default UserCard;
