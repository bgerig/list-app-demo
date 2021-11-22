import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import List from "./components/List";

function App() {
    const [items, setItems] = useState(() => {
        // get items from session storage if available
        const storedItems = JSON.parse(sessionStorage.getItem("items"));
        if (storedItems) {
            return storedItems;
        }

        // otherwise, just use default items and set session storage to that
        const newItems = [
            { id: uuid(), list: 1, value: "Whoa, another item." },
            { id: uuid(), list: 1, value: "Surprise item!" },
            { id: uuid(), list: 2, value: "This is another item!" },
            { id: uuid(), list: 2, value: "This is an item!" },
        ];
        sessionStorage.setItem("items", JSON.stringify(newItems));

        return newItems;
    });

    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const onItemDelete = (id) => {
        setItems((prevItems) => {
            const filteredItems = prevItems.filter((item) => item.id !== id);
            updateSessionStorage(filteredItems);

            return filteredItems;
        });
    };

    const onItemMove = (id) => {
        setItems((prevItems) => {
            let movedItem = {};
            prevItems.forEach((item) => {
                if (item.id === id) {
                    movedItem = { ...item };
                    if (movedItem.list === 1) {
                        movedItem.list = 2;
                    } else {
                        movedItem.list = 1;
                    }
                }
            });

            const updatedItems = [...prevItems.filter((item) => item.id !== id), movedItem];
            updateSessionStorage(updatedItems);

            return updatedItems;
        });
    };

    const onInputChange = (e) => {
        setInputValue(e.target.value);
        setError("");
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) {
            setError("This field cannot be empty.");
            return;
        }

        setItems((prevItems) => {
            const newItems = [
                ...prevItems,
                {
                    id: uuid(),
                    list: 1,
                    value: inputValue,
                },
            ];
            updateSessionStorage(newItems);

            return newItems;
        });

        setInputValue("");
    };

    const updateSessionStorage = (items) => {
        sessionStorage.setItem("items", JSON.stringify(items));
    };

    return (
        <div className="container mx-auto py-6">
            <h1 className="font-bold text-xl lg:text-2xl">List App</h1>
            <p className="mb-4">Total items: {items.length}</p>

            <div className="mb-12 md:mb-14">
                <form className="flex" onSubmit={onFormSubmit}>
                    <input
                        className={`flex-auto bg-gray-100 text-sm md:text-md px-2 md:px-3 py-1 mr-3 rounded ${
                            !!error ? "border-2 border-red-500" : ""
                        }`}
                        type="text"
                        placeholder="Enter some text!"
                        value={inputValue}
                        onChange={onInputChange}
                    />
                    <button
                        type="submit"
                        className="flex-initial bg-gray-900 hover:bg-gray-800 text-gray-100 text-sm md:text-md px-5 md:px-7 py-2 rounded"
                        title="Add Item"
                    >
                        Submit
                    </button>
                </form>

                {!!error && <p className="text-red-500 text-sm font-semibold mt-1">{error}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <List
                    name="List 1"
                    items={items.filter((item) => item.list === 1)}
                    moveItemDirection="right"
                    moveItemDirectionMobile="down"
                    onItemDelete={onItemDelete}
                    onItemMove={onItemMove}
                />
                <List
                    name="List 2"
                    items={items.filter((item) => item.list === 2)}
                    moveItemDirection="left"
                    moveItemDirectionMobile="up"
                    onItemDelete={onItemDelete}
                    onItemMove={onItemMove}
                />
            </div>
        </div>
    );
}

export default App;
