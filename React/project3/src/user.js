import React from 'react'

const User = () => {
  return (
    <div className='container mt-4'>
    <div className='row'>
      <div className='col-lg-12'>
          <h4 className='text-center'> User Management</h4>
          <div className='text-center'> 
              <input type="text" className='m-3' placeholder='Name'/>
              <input type="text" className='m-3' placeholder='Mobile No'/>
              <input type="text" className='m-3' placeholder='Education'/>
              <button className='btn btn-primary'> Save User </button>
          </div>
          <table className='table table-bordered shadow'>
              <thead>
                <tr className='bg-light text-primary'>
                  <th>Sl No</th>
                  <th>Full Name</th>
                  <th>Mobile No</th>
                  <th>Education</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
          </table>
      </div>
    </div>
</div>
  )
}

export default User;