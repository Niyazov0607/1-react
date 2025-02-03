import React from "react";
import addImage from "./assets/add.svg";
import doneImage from "./assets/check1.svg";
import delateImage from "./assets/trash.svg";

function App() {
    return (
        <div className="m-auto text-center mt-[100px] w-[500px]">
            <div className="flex justify-center items-center gap-[10px]">
                <div>
                    <input
                        className="border-2 border-[#3E1671] rounded-[10px] p-[11px_249px_11px_15px] outline-none text-white"
                        placeholder="Add a new task"
                    />
                </div>
                <div className="bg-[#9E78CF] p-[14px] rounded-[10px]">
                    <img src={addImage} alt="Add image" />
                </div>
            </div>
            <div>
                <h2 className="text-white text-left mt-[30px]">
                    Tasks to do - 4
                </h2>
                <div className="items-center bg-[#15101C] mt-[15px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="p-[20px] text-[#9E78CF]">
                                To study React fundamentals
                            </p>
                        </div>
                        <div className="flex pr-[20px] gap-[10px]">
                            <div>
                                <img src={doneImage} alt="" />
                            </div>
                            <div>
                                <img src={delateImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center bg-[#15101C] mt-[15px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="p-[20px] text-[#9E78CF]">
                                To study React fundamentals
                            </p>
                        </div>
                        <div className="flex pr-[20px] gap-[10px]">
                            <div>
                                <img src={doneImage} alt="" />
                            </div>
                            <div>
                                <img src={delateImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center bg-[#15101C] mt-[15px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="p-[20px] text-[#9E78CF]">
                                To study React fundamentals
                            </p>
                        </div>
                        <div className="flex pr-[20px] gap-[10px]">
                            <div>
                                <img src={doneImage} alt="" />
                            </div>
                            <div>
                                <img src={delateImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center bg-[#15101C] mt-[15px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="p-[20px] text-[#9E78CF]">
                                To study React fundamentals
                            </p>
                        </div>
                        <div className="flex pr-[20px] gap-[10px]">
                            <div>
                                <img src={doneImage} alt="" />
                            </div>
                            <div>
                                <img src={delateImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-white text-left mt-[30px]">Done - 1</h2>
                <div className="items-center bg-[#15101C] mt-[15px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="p-[20px] line-through text-[#6BB79D]">
                                To study React fundamentals
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
