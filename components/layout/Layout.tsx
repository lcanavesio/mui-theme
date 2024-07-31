import { Box, styled, Toolbar } from "@mui/material";
import { DrawerContextProvider } from "../context/drawer-context";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";


const OuterContainer = styled(Box)`
  display: flex;
  overflow: hidden;
  height: inherit;
  flex-direction: column;
  min-height: 100vh;
`;

const InnerContainer = styled(Box)`
  display: flex;
  flex: 1;
  overflow: hidden;
  height: inherit;
`;

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  const { children } = props;

  return (
      <DrawerContextProvider>
        <OuterContainer>
          <Header />
          <Toolbar />
          <InnerContainer>
            <Drawer />
            <Main>{children}</Main>
          </InnerContainer>
          <Footer>Sistema gestión consultorios</Footer>
        </OuterContainer>
      </DrawerContextProvider>
    )
};
