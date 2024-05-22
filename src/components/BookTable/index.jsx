import React from 'react'

function BookTable({inputs}) {
  return (
    <div className="pb-5 mt-5">
      <h2 className="text-center text-white">Book Your Table</h2>
      <div className="d-flex gap-4 justify-content-center mt-3">
        {inputs.map((input) => (
          <input
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
            className="border rounded"
            style={{ width: '400px', height: 40 }}
          />
        ))}
      </div>
      <div
        className="mt-4 d-flex justify-content-center"
        style={{
          width: 'calc(400px * 3 + 47px)',
          marginLeft: '9.5%',
          height: 200,
        }}
      >
        <textarea
          className="form-control"
          placeholder="Please write your comment"
          style={{ width: '100%' }}
        />
      </div>
      <button
        className="btn bg-warning text-white mt-4"
        style={{ width: '10%', marginLeft: '9.5%' }}
      >
        Send Message
      </button>
    </div>
  )
}

export default BookTable
