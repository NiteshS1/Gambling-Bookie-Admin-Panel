import React from 'react';

function Paymentaccept() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment Details</h2>
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              id="card_number"
              name="card_number"
              placeholder="Enter your card number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiration_date" className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input
                type="text"
                id="expiration_date"
                name="expiration_date"
                placeholder="MM / YY"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="CVV"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="name_on_card" className="block text-sm font-medium text-gray-700">Name on Card</label>
            <input
              type="text"
              id="name_on_card"
              name="name_on_card"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paymentaccept;
