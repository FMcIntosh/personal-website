import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import { makeStore, submit } from 'data/store'
import withRedux from "next-redux-wrapper"

const decorator = (ComposedComponent) => (
  withRedux(makeStore, null)(MuiThemeWrapper(ComposedComponent))
)

export default decorator;