import TabsContent from "./tabsContent";

const TabContentData = ({item}) => {
  return (
    <>
      <TabPanel value={value} index={1}>
              {data?.length !== 0 && data?.map((el) =>
                  <TabsContent key={el.id} item={el} />
              )}
      </TabPanel>
    </>
  );
};

export default TabContentData;
