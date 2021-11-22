import React from "react";

const ListItem = (props) => {
    const { moveDirection, moveDirectionMobile, onDelete, onMove, value } = props;

    let arrowClassname = "transform";
    if (moveDirection === "left") arrowClassname += " md:rotate-180";
    if (moveDirection === "right") arrowClassname += " md:rotate-0";
    if (moveDirectionMobile === "up") arrowClassname += " -rotate-90";
    if (moveDirectionMobile === "down") arrowClassname += " rotate-90";

    return (
        <div className="flex bg-gray-100 mb-3 px-2 md:px-3 py-2 rounded">
            <span className="mr-auto">{value}</span>
            <button
                className="bg-red-300 hover:bg-red-200 text-red-700 hover:text-red-500 px-2 py-1 mr-1 rounded"
                title="Delete Item"
                onClick={onDelete}
            >
                <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            </button>
            <button
                className="bg-gray-300 hover:bg-gray-200 text-gray-900 hover:text-gray-600 px-2 py-1 rounded"
                title="Move Item"
                onClick={onMove}
            >
                <svg
                    className={`${arrowClassname} fill-current w-4 h-4`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                </svg>
            </button>
        </div>
    );
};

export default ListItem;
