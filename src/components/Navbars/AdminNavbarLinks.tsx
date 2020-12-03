import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';
import Poppers from '@material-ui/core/Popper';
// @material-ui/icons
import Person from '@material-ui/icons/Person';
import Notifications from '@material-ui/icons/Notifications';
import Dashboard from '@material-ui/icons/Dashboard';
import Search from '@material-ui/icons/Search';
// core components
import CustomInput from '../CustomInput/CustomInput';
import Button from '../CustomButtons/Button';

import headerLinksStyle from '../../assets/jss/material-dashboard-react/components/headerLinksStyle';

import { Link } from "react-router-dom";

interface Props {
  classes: any;
}

class HeaderLinks extends React.Component<Props, {}> {

  anchorEl: any;

  state = {
    NotificationOpen: false,
    UserOpen: false
  };

  NotificationToggle = () => {
    this.setState({ NotificationOpen: !this.state.NotificationOpen });
  }

  NotificationClose = (event: any) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ NotificationOpen: false });
  }

  UserToggle = () => {
    this.setState({ UserOpen: !this.state.UserOpen });
  }

  UserClose = (event: any) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ UserOpen: false });
  }

  render() {
    const { classes } = this.props;
    const { NotificationOpen } = this.state;
    const { UserOpen } = this.state;
    return (
      <div>
        <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{
              className: classes.margin + ' ' + classes.search
            }}
            inputProps={{
              placeholder: 'Search',
              inputProps: {
                'aria-label': 'Search'
              }
            }}
          />
          <Button color="white" aria-label="edit" justIcon={true} round={true}>
            <Search />
          </Button>
        </div>
        <Button
          color={window.innerWidth > 959 ? 'transparent' : 'white'}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Dashboard"
          className={classes.buttonLink}
        >
          <Dashboard className={classes.icons} />
          <Hidden mdUp={true} implementation="css">
            <p className={classes.linkText}>Dashboard</p>
          </Hidden>
        </Button>
        <div className={classes.manager}>
          <Button
            buttonRef={(node: any) => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? 'transparent' : 'white'}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={NotificationOpen ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={this.NotificationToggle}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp={true} implementation="css">
              <p className={classes.linkText}>
                {/* onClick={this.handleClick} */}
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={NotificationOpen}
            anchorEl={this.anchorEl}
            transition={true}
            disablePortal={true}
            className={
              classNames({ [classes.popperClose]: !NotificationOpen }) +
              ' ' +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                // id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.NotificationClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.NotificationClose}
                        className={classes.dropdownItem}
                      >
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem
                        onClick={this.NotificationClose}
                        className={classes.dropdownItem}
                      >
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem
                        onClick={this.NotificationClose}
                        className={classes.dropdownItem}
                      >
                        You're now friend with Andrew
                      </MenuItem>
                      <MenuItem
                        onClick={this.NotificationClose}
                        className={classes.dropdownItem}
                      >
                        Another Notification
                      </MenuItem>
                      <MenuItem
                        onClick={this.NotificationClose}
                        className={classes.dropdownItem}
                      >
                        Another One
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>


        <div className={classes.manager}>
          <Button
            buttonRef={(node: any) => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? 'transparent' : 'white'}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={UserOpen ? 'menu-list-grow' : null}
            aria-haspopup="true"
            aria-label="Person"
            onClick={this.UserToggle}
            className={classes.buttonLink}
          >
            <Person className={classes.icons} />
            <Hidden mdUp={true} implementation="css">
              <p className={classes.linkText}>Profile</p>
            </Hidden>
          </Button>
          <Poppers
            open={UserOpen}
            anchorEl={this.anchorEl}
            transition={true}
            disablePortal={true}
            className={
              classNames({ [classes.popperClose]: !UserOpen }) +
              ' ' +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                // id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.UserClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.UserClose}
                        className={classes.dropdownItem}
                      >
                        <h2>Patel Dipen</h2>
                      </MenuItem>
                      <MenuItem
                        onClick={this.UserClose}
                        className={classes.dropdownItem}
                      >
                        <Link
                          to={`/Login`}
                          className={classes.profileMenuLink}
                          color="primary"
                        >
                          Sign-Out
                        </Link>
                        
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
