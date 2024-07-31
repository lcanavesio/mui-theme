import CssBaseline from "@mui/material/CssBaseline";
import { memo } from "react";
import { Layout } from "./Layout";

const RootApp = (prop) => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <prop.Component {...prop} />
      </Layout>
    </>
  );
};

export default memo(RootApp);
