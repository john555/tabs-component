import React, {Component} from 'react';

class TabGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  onClick(index) {
    return () => {
      this.setState({activeIndex: index})
    }
  }

  renderComponent(componentName) {
    return this.props.children.map((tab, index) => {
      // let's render 'TabContent' only if the tab is active
      // Ideally we could allow the user to choose to render all 'TabContent' components
      if(componentName === 'TabContent' && index !== this.state.activeIndex) {
        return;
      }
      let $child = tab.props.children.find(e => e.type.name === componentName);
      // Reconstruct props for 'TabHeader' and 'TabContent'.
      // This is an opportunity to pass props to children
      const $props = {
        ...$child.props,
        active: index === this.state.activeIndex,
      };

      // pass onClick prop to only TabHeader component
      if(componentName === 'TabHeader') {
        $props.onClick = this.onClick(index);
      }

      $child = {
        ...$child,
        props: $props,
      };
    
      return $child;
    });
  }

  render () {
    return (
      <div className="tabGroup">
        <div className="tabGroup__header">
          {this.renderComponent('TabHeader')}
        </div>
        <div className="tabGroup__content">
          {this.renderComponent('TabContent')}
        </div>
      </div>
    );
  }
}

export default TabGroup;
