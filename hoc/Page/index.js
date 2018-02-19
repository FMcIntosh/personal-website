import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import { makeStore } from 'data/store';
import withRedux from 'next-redux-wrapper';
import { withTheme } from 'material-ui/styles';

const decorator = (ComposedComponent, mapStateToProps) =>
  withRedux(makeStore, mapStateToProps)(MuiThemeWrapper(ComposedComponent));

export default decorator;
