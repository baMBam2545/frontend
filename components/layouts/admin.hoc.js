import React, { Component } from 'react'
import AdminHeader from './admin.header'
import AdminFooter from './admin.footer';
import Adminmenu from './admin.menu';

export default class AdminHOC extends Component {
  render(){
  return (
    <div>
      <div>
        <AdminHeader />
        <Adminmenu />
        {this.props.children}
        <AdminFooter />
      </div>
    </div>
  )
  }
}