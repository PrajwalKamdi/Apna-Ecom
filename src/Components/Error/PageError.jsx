import React from 'react';

const PageError = ({message}) => {
    return (
        <div className="flex  items-center  justify-center min-h-screen  bg-red-100">
            <div className="bg-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
                <h1 className="text-2xl mb-4">Error</h1>
                <p>Something went wrong. Please try again later.</p>
                <p>{message.message}</p>
            </div>
        </div>
    );
};

export default PageError;