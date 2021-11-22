import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
    const { items, name, moveItemDirection, moveItemDirectionMobile, onItemDelete, onItemMove } = props;

    return (
        <div className="items-list">
            <h2 className="font-bold mb-3">{name}</h2>

            {items && items.length > 0 ? (
                items.map((item) => (
                    <ListItem
                        key={item.id}
                        id={item.id}
                        moveDirection={moveItemDirection}
                        moveDirectionMobile={moveItemDirectionMobile}
                        onDelete={() => onItemDelete(item.id)}
                        onMove={() => onItemMove(item.id)}
                        value={item.value}
                    />
                ))
            ) : (
                <span className="text-red-500 text-sm font-semibold mt-1">This list is currently empty.</span>
            )}
        </div>
    );
};

export default List;
