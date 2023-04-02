import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";

const BoxWrapper = styled("div")(({ theme }) => ({}));

const TabsContent = ({item}) => {
  return (
    <>
      <BoxWrapper>
        <Grid
          container
          spacing={2}
          sx={{
            margin: "auto",
            maxWidth: 1200,
            flexGrow: 1,
          }}
        >
          <Grid item>
            <Image
              src={item.tabImg.imgUrl}
              alt="About Company"
              width={item.tabImg.width}
              height={item.tabImg.height}
            />
          </Grid>

          <Grid item xs={12} sm container alignItems="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  variant="p"
                  align="left"
                  color="#000"
                  fontFamily="sans-serif"
                  fontSize={16}
                  paragraph
                >
                  {item.tabDesc}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "20px" }}>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.tablists1} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "20px" }}>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.tablists2} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "20px" }}>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.tablists3} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxWrapper>
    </>
  );
};

export default TabsContent;
