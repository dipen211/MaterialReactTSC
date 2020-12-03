import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logotypeImage: {
    width: 165,
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 320,
  },
  tab: {
    fontWeight: 400,
    fontSize: 18,
  },
  greeting: {
    fontWeight: 500,
    textAlign: "center",
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: "center",
  },
  googleButton: {
    backgroundColor: "white",
    width: "100%",
    textTransform: "none",
  },
  googleButtonCreating: {
    marginTop: 0,
  },
  googleIcon: {
    width: 30,
  },
  creatingButtonContainer: {
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountButton: {
    height: 46,
    textTransform: "none",
  },
  formDividerContainer: {
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
  },
  errorMessage: {
    textAlign: "center",
  },
  formButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400,
  },
  loginLoader: {
  },
  copyright: {
    whiteSpace: "nowrap",
  },
}));
