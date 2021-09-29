import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import AdminHOC from '../../components/layouts/admin.hoc';
import axios from 'axios'

const Home = ({Home , error}) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
    return (
        <div>
            <AdminHOC>
            {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>ตารางสมาชิก</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">DataTables</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">รายชื่อสมาชิก</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>username</th>
                    <th>password</th>
                    <th>edit</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                {Home.map(data => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.username}</td>
                    <td>{data.password}</td>
                    <td className="text-center"> <Link href={`/users/edit/${data.id}`}><a className ="btn btn-warning">แก้ไข</a></Link></td>
                    <td className="text-center"> <Link href = "#"><a className ="btn btn-danger">ลบ</a></Link></td>
                  </tr>
                ))}
                </tbody>                
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}


            </AdminHOC>
        </div>
    )
}

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/members');
    const Home= res.data;
    return { Home };
  } catch (error) {
    return { error };
  }
};
export default Home