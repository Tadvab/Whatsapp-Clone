import Dialog from "@mui/material/Dialog";

import { Box } from "@mui/system";

import { Typography, List, ListItem, styled } from "@mui/material";

import { qrCodeImage } from "../../constants/data";

const Component = styled(Box)`
  display: flex;
`;

const modifiedDialog = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const ModifiedList = styled(List)`
  & > li {
    padding: 0,
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const LoginDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: modifiedDialog }}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>

          <ModifiedList>
            <ListItem>1. Open Whatsapp on your phone</ListItem>

            <ListItem>2. Tap Menu Settings on the phone</ListItem>

            <ListItem>3. Tap Linked Devices and then link a device</ListItem>
          </ModifiedList>
        </Container>

        <Box>
          <QRCode src={qrCodeImage} alt="QR Code" />
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;