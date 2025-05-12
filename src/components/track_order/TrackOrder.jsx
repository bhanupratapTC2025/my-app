// 'use client';
// import React, { useState } from 'react';

// const steps = [
//   'Order Placed',
//   'Packed',
//   'Shipped',
//   'Out for Delivery',
//   'Delivered',
// ];

// // Simulated order data (replace with backend call later)
// const mockOrders = {
//   '123456': 5,
//   '9876543210': 3,
// };

// const TrackOrder = () => {
//   const [orderInput, setOrderInput] = useState('');
//   const [currentStep, setCurrentStep] = useState(null);
//   const [error, setError] = useState('');

//   const handleTrackOrder = () => {
//     const step = mockOrders[orderInput.trim()];
//     if (step !== undefined) {
//       setCurrentStep(step);
//       setError('');
//     } else {
//       setError('Order not found. Please check your ID or mobile number.');
//       setCurrentStep(null);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//         Track Your Order
//       </h2>

//       {/* Input section */}
//       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Enter Order ID or Mobile Number"
//           value={orderInput}
//           onChange={(e) => setOrderInput(e.target.value)}
//           className="w-full sm:w-96 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           onClick={handleTrackOrder}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Track
//         </button>
//       </div>

//       {/* Error message */}
//       {error && <p className="text-red-600 text-center mb-4">{error}</p>}

//       {/* Tracker */}
//       {currentStep !== null && (
//         <>
//           <div className="relative mt-12 mb-12">
//             {/* Background line */}
//             <div className="absolute top-5 left-0 right-0 h-1 bg-gray-300 z-0"></div>

//             {/* Foreground progress line */}
//             <div
//               className="absolute top-5 left-0 h-1 bg-green-600 z-10 transition-all duration-500"
//               style={{
//                 width: `${(currentStep - 1) / (steps.length - 1) * 100}%`,
//               }}
//             ></div>

//             {/* Step Circles */}
//             <div className="flex justify-between items-center relative z-20">
//               {steps.map((step, index) => {
//                 const isCompleted = index < currentStep;
//                 const isActive = index === currentStep;

//                 return (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center w-full text-center"
//                   >
//                     <div
//                       className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-transform duration-300
//                         ${
//                           isCompleted
//                             ? 'bg-green-600'
//                             : isActive
//                             ? 'bg-blue-600 animate-bounce'
//                             : 'bg-gray-300'
//                         }`}
//                     >
//                       {index + 1}
//                     </div>
//                     <p
//                       className={`mt-2 text-sm ${
//                         isCompleted || isActive ? 'text-black' : 'text-gray-400'
//                       }`}
//                     >
//                       {step}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Status box */}
//           <div className="text-center">
//             <div className="inline-block px-6 py-4 bg-blue-100 border border-blue-300 rounded-xl shadow-md animate-pulse transition duration-500 ease-in-out hover:scale-105">
//               <p className="text-lg font-semibold text-blue-800">
//                 🚚 Current Status:&nbsp;
//                 <span className="text-blue-700">{steps[currentStep]}</span>
//               </p>
//             </div>

//             <div className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
//               {currentStep === 0 &&
//                 'Your order has been placed and is waiting to be processed.'}
//               {currentStep === 1 &&
//                 'Your order has been packed and is ready to be shipped.'}
//               {currentStep === 2 &&
//                 'Your order has been shipped and is on the way.'}
//               {currentStep === 3 &&
//                 'Your package is out for delivery. Get ready!'}
//               {currentStep === 4 &&
//                 'Your order has been delivered. Thank you for shopping with us!'}
//               {currentStep === 5 &&
//                 'Your order has been fully processed and completed.'}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TrackOrder;



'use client';
import React, { useState } from 'react';

const steps = [
  'Order Placed',
  'Packed',
  'Shipped',
  'Out for Delivery',
  'Delivered',
];

const mockOrders = {
  '9876543210': 2,
  'AWB123456': 5,
  'OID98765': 4,
};

const TrackOrder = () => {
  const [method, setMethod] = useState('mobile');
  const [input, setInput] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(null);

  const sendOTP = () => {
    if (input.trim().length === 10) {
      setOtpSent(true);
      setError('');
    } else {
      setError('Please enter a valid 10-digit mobile number.');
    }
  };

  const verifyOTP = () => {
    if (otpInput === '1234') {
      setVerified(true);
      setError('');
      const step = mockOrders[input.trim()];
      setCurrentStep(step !== undefined ? step : null);
      if (step === undefined) setError('Order not found.');
    } else {
      setError('Invalid OTP. Try again.');
    }
  };

  const handleTrack = () => {
    const step = mockOrders[input.trim()];
    setCurrentStep(step !== undefined ? step : null);
    setError(step !== undefined ? '' : 'Order not found.');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Track Your Order
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {['mobile', 'awb', 'order'].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-md border ${
              method === type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
            onClick={() => {
              setMethod(type);
              setOtpSent(false);
              setVerified(false);
              setCurrentStep(null);
              setInput('');
              setOtpInput('');
              setError('');
            }}
          >
            {type === 'mobile'
              ? 'Mobile Number'
              : type === 'awb'
              ? 'Tracking ID/AWB'
              : 'Order ID'}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="space-y-4 max-w-md mx-auto">
        {method === 'mobile' && !otpSent && (
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Mobile No"
              value={input}
              maxLength={10}
              onChange={(e) => setInput(e.target.value)}
              className="border p-3 rounded-md w-full"
            />
            <button
              onClick={sendOTP}
              className="bg-blue-600 text-white px-6 py-2 rounded-md w-full sm:w-auto"
            >
              +91 Send OTP
            </button>
          </div>
        )}

        {method === 'mobile' && otpSent && !verified && (
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              className="border p-3 rounded-md w-full"
            />
            <button
              onClick={verifyOTP}
              className="bg-green-600 text-white px-6 py-2 rounded-md w-full sm:w-auto"
            >
              Verify OTP
            </button>
          </div>
        )}

        {(method === 'awb' || method === 'order') && (
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder={
                method === 'awb' ? 'Enter Tracking ID/AWB' : 'Enter Order ID'
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border p-3 rounded-md w-full"
            />
            <button
              onClick={handleTrack}
              className="bg-blue-600 text-white px-6 py-2 rounded-md w-full sm:w-auto"
            >
              Track Order
            </button>
          </div>
        )}
      </div>

      {/* Error */}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}

      {/* Progress Tracker */}
      {currentStep !== null && (
        <>
          <div className="relative mt-15 mb-12 overflow-x-auto">
            {/* Line Background */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-300 z-0 mt-4"></div>

            {/* Line Progress */}
            <div
              className="absolute top-5 left-0 h-1 bg-green-600 z-10 transition-all duration-500 mt-4"
              style={{
                width: `${(currentStep - 1) / (steps.length - 1) * 100}%`,
              }}
            ></div>

            {/* Steps */}
            <div className="flex justify-between items-center relative z-20 min-w-[600px] sm:min-w-full p-4 ">
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;

                return (
                  <div key={index} className="flex flex-col items-center w-full text-center ">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold  text-white
                        ${isCompleted ? 'bg-green-600' : isActive ? 'bg-blue-600 animate-bounce' : 'bg-gray-300'}`}
                    >
                      {index + 1}
                    </div>
                    <p className={`mt-2 text-sm ${isCompleted || isActive ? 'text-black' : 'text-gray-400'}`}>
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Status Box */}
          <div className="text-center px-4">
            <div className="inline-block px-6 py-4 bg-blue-100 border border-blue-300 rounded-xl shadow-md animate-pulse">
              <p className="text-lg font-semibold text-blue-800">
                🚚 Current Status:&nbsp;
                <span className="text-blue-700">{steps[currentStep]}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TrackOrder;
