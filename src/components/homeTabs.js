import PropTypes from "prop-types";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import TabsContent from "./tabsContent";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeTabs = (props) => {
  const [value, setValue] = useState(0);
  const { data } = props;
  console.log(data);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                background: "#cda274",
              },
            }}
          >
            {data?.length !== 0 &&
              data?.map((el, index) => (
                <Tab
                  label={el.tabName}
                  {...a11yProps(index)}
                  sx={[{ color: "#000" }]}
                />
              ))}
          </Tabs>
        </Box>

        {data?.length !== 0 &&
          data?.map((el, index) => (
            <TabPanel key={el.id} value={value} index={index}>
              <TabsContent key={el.id} item={el} />
            </TabPanel>
          ))}

      
      </Box>
    </>
  );
};

export default HomeTabs;
