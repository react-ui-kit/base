import React, { PureComponent } from 'react';

import { Dashboard, Panels, Panel, Button } from 'components/';

export default class DashboardPanels extends PureComponent {
  render() {
    return (
      <Dashboard>
        <Panels>
          <Panel align='start' style={{backgroundColor: '#00BCD4'}}>Row: start</Panel>
          <Panel align='end' style={{backgroundColor: '#9C27B0'}}>Row: end</Panel>
          <Panel align='center' style={{backgroundColor: '#8BC34A'}}>Row: center</Panel>
          <Panel align='baseline' style={{backgroundColor: '#FFC107'}}>Row: baseline</Panel>
          <Panel align='stretch' style={{backgroundColor: '#FF9800'}}>Row: stretch</Panel>
        </Panels>

        <Panels column>
          <Panel style={{backgroundColor: '#9C27B0'}}>
            Column 1
            <br />
            <Button>buton 1</Button>
            <Button>buton 2</Button>
            <Button>buton 3</Button>
            <Button>buton 4</Button>
          </Panel>
          <Panel style={{backgroundColor: '#00BCD4'}}>
            Column 2
            <br />
            <Button>buton 1</Button>
            <Button>buton 2</Button>
            <Button>buton 3</Button>
            <Button>buton 4</Button>
          </Panel>
          <Panel style={{backgroundColor: '#8BC34A'}}>
            Column 3
            <br />
            <Button>buton 1</Button>
            <Button>buton 2</Button>
            <Button>buton 3</Button>
            <Button>buton 4</Button>
          </Panel>
          <Panel style={{backgroundColor: '#FFC107'}}>
            Column 4
            <br />
            <Button>buton 1</Button>
            <Button>buton 2</Button>
            <Button>buton 3</Button>
            <Button>buton 4</Button>
          </Panel>
          <Panel style={{backgroundColor: '#FF9800'}}>
            Column 5
            <br />
            <Button>buton 1</Button>
            <Button>buton 2</Button>
            <Button>buton 3</Button>
            <Button>buton 4</Button>
          </Panel>
        </Panels>
      </Dashboard>
    );
  }
}
