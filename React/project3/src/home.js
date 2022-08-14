import React from 'react'

const Home = () => {
  return (
    <div className='container'>
       <div className='row mb-4'>
        <div className='col-lg-6 offset-3'>
            <h4 className='text-center text-success'> Book List From Store </h4>
              <table className='table table-bordered shadow'>
                  <thead>
                    <tr className='bg-light text-primary'>
                      <th>Sl No</th>
                      <th>Book Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
              </table>
        </div>
       </div>

      <div className='row mt-4'>
        <div className='col-lg-12'>
        <h4 className='text-center text-danger'> User List From Store </h4>
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

export default Home;