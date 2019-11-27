import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Actions} from 'react-native-router-flux';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

export default class MyMenu extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  navigateToTeams = () => {
    this._menu.hide();
    Actions.csapatok();
  };

  navigateToGoals = () => {
    this._menu.hide();
    Actions.golok();
  };

  showMenu = () => {
    this._menu.show();
  };

  navigateToLoginScreen = async () => {
    await LoginManager.logOut();
    Actions.replace('fokepernyo');
  };

  render() {
    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text style={styles.buttonStyle} onPress={this.showMenu}>
              Menü
            </Text>
          }>
          <MenuItem onPress={this.hideMenu}>Saját fiók</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.navigateToTeams}>Csapatok</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.navigateToGoals}>Gólszerzők</MenuItem>
          <MenuDivider />
          <MenuItem onPress={(LoginManager.logOut, this.navigateToLoginScreen)}>
            Kijelentkezés
          </MenuItem>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgb(255,255,255)',
    marginRight: 10,
  },
});
