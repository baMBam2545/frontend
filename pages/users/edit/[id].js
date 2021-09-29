import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import AdminHOC from '../../../components/layouts/admin.hoc';
import axios from 'axios'

const edituser = ({Home , error}) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
    return (
        <div>
            <AdminHOC>
            <body class="hold-transition register-page">
<div className="register-box">
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">แก้ไขข้อมูลสมาชิก</p>
      <form action="/" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="ชื่อ" onChange={(event) => { setfirstName(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="นามสกุล" onChange={(event) => { setlastName(event.target.value) }}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" onChange={(event) => { setuserName(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      </form>
      <div className="social-auth-links text-center">
      <button type="button" class="btn btn-success">ปรับปรุงข้อมูล</button>
      <br />
        
      </div>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}

</body>
            </AdminHOC>
        </div>
    )
}

edituser.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/members');
    const Home= res.data;
    return { Home };
  } catch (error) {
    return { error };
  }
};
export default edituser