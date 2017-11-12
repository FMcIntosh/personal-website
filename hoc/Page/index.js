import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import { makeStore } from 'data/store'
import withRedux from "next-redux-wrapper";
import { withTheme } from 'material-ui/styles';

const decorator = (ComposedComponent) => (
  withRedux(makeStore, null)(MuiThemeWrapper(ComposedComponent))
)

export default decorator;