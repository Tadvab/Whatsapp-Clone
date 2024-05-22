import React from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Box, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import { useContext } from "react";
import { AccountContext } from "./Context/AccountProvider";
import ChatDialog from "./ChatDialog";

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <ChatDialog />
      ) : (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <LoginDialog />;
        </>
      )}
    </Component>
  );
};

export default Messenger;
