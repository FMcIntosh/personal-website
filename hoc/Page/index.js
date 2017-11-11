import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import { makeStore, submit } from 'data/store'
import withRedux from "next-redux-wrapper";
import { withTheme } from 'material-ui/styles';

const decorator = (ComposedComponent) => (
  withRedux(makeStore, null)(withTheme()(MuiThemeWrapper(ComposedComponent)))
)

export default decorator;