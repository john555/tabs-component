import React, { Component } from 'react';
import TabGroup from './TabGroup';
import Tab from './Tab';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tabs Component</h1>
        </header>
        <main className="mainContent">
          <TabGroup>
            <Tab>
              <TabContent>Tab Content 1</TabContent>
              <TabHeader>Tab Header 1</TabHeader>
            </Tab>
            <Tab>
              <TabHeader>Tab Header 2</TabHeader>
              <TabContent>Tab Content 2</TabContent>
            </Tab>
            <Tab>
              <TabHeader>Tab Header 3</TabHeader>
              <TabContent>Tab Content 3</TabContent>
            </Tab>
          </TabGroup>
        </main>
      </div>
    );
  }
}

export default App;
