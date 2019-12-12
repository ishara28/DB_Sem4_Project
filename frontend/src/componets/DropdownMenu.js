// import React, { Component } from 'react'
// import ReactDOM from 'react-dom';


// class DropdownMenu extends React.Component {

//     getMenuItemTitle = (menuItem, index, depthLevel) => {
//       return menuItem.title;
//     };
  
//     getMenuItem = (menuItem, depthLevel, index) => {
//       let title = this.getMenuItemTitle(menuItem, index, depthLevel);
  
//       if (menuItem.submenu && menuItem.submenu.length > 0) {
//         return (
//           <li>
//             {title}
//             <DropdownMenu config={menuItem.submenu} submenu={true} />
//           </li>
//         );
//       } else {
//         return <li>{title}</li>;
//       }
//     };
  
//     render = () => {
//       let { config } = this.props;
  
//       let options = [];
//       config.map((item, index) => {
//         options.push(this.getMenuItem(item, 0, index));
//       });
  
//       if (this.props.submenu && this.props.submenu === true)
//         return <ul>{options}</ul>;
  
//       return <ul className="dropdown-menu">{options}</ul>;
//     };
//   }
  
  
//   ReactDOM.render(<DropdownMenu config={[
//       {
//         "title": "Option 1",
//         "submenu": null
//       },
//       {
//         "title": "Option 2",
//         "submenu": [
//           {
//             "title": "Option 2.1",
//             "submenu": [
//               {
//                 "title": "Option 2.1.1",
//                 "submenu": null
//               },
//               {
//                 "title": "Option 2.1.2",
//                 "submenu": null
//               }
//             ]
//           },
//           {
//             "title": "Option 2.2",
//             "submenu": [
//               {
//                 "title": "Option 2.2.1",
//                 "submenu": null
//               },
//               {
//                 "title": "Option 2.2.2",
//                 "submenu": null
//               }
//             ]
//           }
//         ]
//       }
//     ]}/>, document.querySelector("#root"))
  