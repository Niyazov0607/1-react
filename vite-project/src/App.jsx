import React, { useRef, useState } from "react";
import addImage from "./assets/add.svg";
import doneImage from "./assets/check1.svg";
import deleteImage from "./assets/trash.svg";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const inputRef = useRef();

    function handleAdd() {
        const newItem = inputRef.current.value.trim();
        if (newItem === "") return;

        const uniqueTasks = new Set(
            todos.map((task) => task.text.toLowerCase())
        );

        if (uniqueTasks.has(newItem.toLowerCase())) {
            alert("You already added this task!");
            return;
        }

        setTodos([{ id: Date.now(), text: newItem }, ...todos]);
        inputRef.current.value = "";
    }

    function handleDone(id) {
        const taskToMove = todos.find((task) => task.id === id);
        setDoneTasks([taskToMove, ...doneTasks]);
        setTodos(todos.filter((task) => task.id !== id));
    }

    function handleDelete(id, fromDone = false) {
        if (fromDone) {
            setDoneTasks(doneTasks.filter((task) => task.id !== id));
        } else {
            setTodos(todos.filter((task) => task.id !== id));
        }
    }
        
    return (
        <div className="m-auto text-center mt-[100px] w-[500px]">
            <div className="flex justify-center items-center gap-[10px]">
                <div>
                    <input
                        ref={inputRef}
                        className="border-2 border-[#3E1671] rounded-[10px] p-[11px_249px_11px_15px] outline-none text-white"
                        placeholder="Add a new task"
                    />
                </div>
                <div
                    className="bg-[#9E78CF] p-[10px] rounded-[10px]"
                    onClick={handleAdd}
                >
                    <button>
                        <img src={addImage} alt="Add image" />
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-white text-left mt-[30px]">
                    Tasks to do - {todos.length}
                </h2>
                {todos.map((item) => (
                    <div
                        key={item.id}
                        className="items-center bg-[#15101C] mt-[15px] rounded-[10px]"
                    >
                        <div className="flex items-center justify-between">
                            <ul className="p-[20px] text-[#9E78CF] text-left ml-[20px]">
                                <li>{item.text}</li>
                            </ul>
                            <div className="flex pr-[20px] gap-[10px]">
                                <button onClick={() => handleDone(item.id)}>
                                    <img src={doneImage} alt="Done" />
                                </button>
                                <button onClick={() => handleDelete(item.id)}>
                                    <img src={deleteImage} alt="Delete" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h2 className="text-white text-left mt-[30px]">
                    Done - {doneTasks.length}
                </h2>
                {doneTasks.map((item) => (
                    <div
                        key={item.id}
                        className="items-center bg-[#15101C] mt-[15px] rounded-[10px]"
                    >
                        <div className="flex items-center justify-between">
                            <ul className="p-[20px] text-[#6BB79D] text-left ml-[20px]">
                                <li className="line-through">{item.text}</li>
                            </ul>
                            <div className="pr-[18px]">
                                <button
                                    onClick={() => handleDelete(item.id, true)}
                                >
                                    <img src={deleteImage} alt="Delete" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;