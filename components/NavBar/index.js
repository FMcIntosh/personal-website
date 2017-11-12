import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { changePage } from 'data/store';
import { connect } from 'react-redux';
import Pages from 'data/pages';
 
function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class BasicTabs extends React.Component {
  state = {
    value: 0,
  };

  pages = [Pages.PROJECTS, Pages.BLOG, Pages.INTEREST_FEED];

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(changePage(this.pages[value].slug));
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs centered  fullWidth value={value} onChange={this.handleChange}>
            {this.pages.map(page => (
             <Tab 
              label={page.label} 
              key={page.label}/>
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const TabsWithStyles = withStyles(styles)(BasicTabs);

export default connect()(TabsWithStyles);