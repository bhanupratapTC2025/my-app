'use client';
import { useState } from 'react';

export default function PinCodeChecker() {
    const [pinCode, setPinCode] = useState('');
    const [deliveryDate, setDeliveryDate] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkDelivery = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setDeliveryDate(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="border rounded-md p-4 mt-6">
            <h3 className="font-medium mb-2">Check Delivery Date</h3>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="Enter PIN code"
                    className="border rounded-md px-3 py-2 flex-1"
                    maxLength={6}
                />
                <button
                    onClick={checkDelivery}
                    disabled={pinCode.length !== 6 || loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-blue-300"
                >
                    {loading ? 'Checking...' : 'Check'}
                </button>
            </div>
            {deliveryDate && (
                <p className="mt-2 text-green-600">
                    Expected delivery by {deliveryDate.toLocaleDateString()}
                </p>
            )}
        </div>
    );
}