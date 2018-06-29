import * as React from 'react';
import {Component} from 'react';
import {AppWrapper} from './styled';
import {GHCorner} from 'react-gh-corner';
export interface AppState {
  
}
const repoUrl = 'https://github.com/zzarcon/';
export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner href={repoUrl} />
        Example!
      </AppWrapper>
    )
  }
}