// import React from 'react'

function Payment() {
  return (
    <>
      <div className="bg-custom-gradient flex justify-center items-center p-10">
        <div className="bg-white p-16 text-center">
          <h1 className="text-3xl font-bold my-1">ARE YOU SURE</h1>
          <ul className="text-semibold text-center font-bold my-1">
            <li>User Name : John Corelone</li>
            <li className="text-green-600">Amount: &#8360; 2000 /-</li>
          </ul>
          <div className="text-center m-1 p-2 space-x-4 my-1">
            <button className="bg-green-600 p-2 rounded-md text-white hover:bg-green-800">Accept</button>
            <button className="bg-red-600 p-2 rounded-md text-white hover:bg-red-800">Decline</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment