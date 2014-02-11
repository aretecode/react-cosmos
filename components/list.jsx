/** @jsx React.DOM */

Fresh.components.List = React.createClass({
  /**
   * Input: {
   *   component: 'List',
   *   data: 'http://localhost/static/users.json'
   * }
   */
  mixins: [Fresh.mixins.SetInterval,
           Fresh.mixins.PersistState,
           Fresh.mixins.DataManager],
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <ul className="List">
        {this.state.data.map(function(item, index) {
          var itemComponent = Fresh.getComponentByName(item.component);
          return <li key={index}>{itemComponent(_.clone(item))}</li>
        })}
      </ul>
    );
  }
});