import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer'

class ListDrawer extends Component {
  state = {
    open:false,
    query:""
  }

  styles = {
    list: {
      width: "250px",
      padding: "0px 15px 0px"
    },
    noBullets: {
      listStyleType: "none",
      padding: 0
    },
    fullList: {
      width: 'auto'
    },
    listItem: {
      marginBottom: "15px"
    },
    listLink: {
      background: "transparent",
      border: "none",
      color: "black"
    },
    filterEntry: {
      border: "1px solid gray",
      padding: "2px",
      margin: "30px 0px 10px",
      width: "100%"
    }
  };

  updateQuery = (newQuery) => {
    this.setState({query: newQuery});
    this.props.filterLocations(newQuery);
  }

  render = () => {
    return (
      <div>
        <Drawer open = {this.props.open} onClose = {this.props.toggle}>
          <div style = {this.styles.list}>
            <input
              style = {this.styles.filterEntry}
              type = "text"
              placeholder = "filter"
              name = "filter"
              onChange = {e => this
                .updateQuery(e.target.value)}
              value = {this.state.query} />
            <ul style = {this.styles.noBullets} >
              {this.props.locations && this
                .props
                .locations
                .map((location,index) => {
                  return (
                    <li style = {this.styles.listItem} key = {index} >
                      <button style = {this.styles.listLink} key = {index} onClick = {e => this.props.clickListItem(index)} > {location.name} </button>
                    </li>
                  )
                })}
            </ul>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default ListDrawer;
