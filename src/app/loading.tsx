import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="bg-black text-white font-bold w-full h-screen flex flex-col items-center justify-center p-4">

            {/* Loading Messages */}
            <h1 className="text-xl md:text-3xl text-center">
                Your Content Has Been Loading
            </h1>
            <br />
            <h1 className="text-lg md:text-2xl text-center">
                PLEASE WAIT A MOMENT
            </h1>
                        {/* Animated Spinner */}
                        <div className="w-12 h-12 md:w-16 md:h-16 border-4 md:border-6 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        </div>
    );
};

export default Loading;
