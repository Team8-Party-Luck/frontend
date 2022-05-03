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

const UserCard = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ my: "auto", mr:'1rem',width:'3.5rem', height:'3.5rem'}}
          />
          <div>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              유저 이름
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", }}>
              짧은 자기소개 안녕하세요 짧은 자기소개 안녕하세요
            </Typography>
            <Typography sx={{ fontSize: "0.5rem" }}>
              여자 20대 서울 마포구
            </Typography>
          </div>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>선호음식종류</Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
      </AccordionDetails>
      <Button sx={{ width: "100%", height: "3rem" }} variant="outlined">
        쪽지보내기
      </Button>
    </Accordion>
  );
};

export default UserCard;
