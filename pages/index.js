import React from 'react'
import AdminFooter from '../components/layouts/admin.footer'
import AdminHeader from '../components/layouts/admin.header'
import AdminSideber from '../components/layouts/admin.menu'
const Home = () => {
    return (
        <div>
            <AdminHeader />
            <AdminSideber />
        <div className="content-wrapper">
            <h1>CodeMobiles</h1>
        </div>
        <AdminFooter />
        </div>

    )
}

export default Home