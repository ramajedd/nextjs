import React, { useState } from "react";
import Button from "./button";
import {Kalender} from "./datePicker";

export default function DatePickerModal() {
    const [showModal, setShowModal] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const opsi = selectedDay ? selectedDay.day + "/" + selectedDay.month + "/" + selectedDay.year : "tgl";
    return (
        <>
            <Button
                theme={2}
                onClick={() => setShowModal(true)}
            >
                {opsi}
            </Button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

                    >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    
                                    <Kalender
                                        value={selectedDay}
                                        onChange={setSelectedDay}
                                        shouldHighlightWeekends
                                    />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Selesai
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}


// referensi button: 
// https://www.creative-tim.com/learning-lab/tailwind/react/modals/notus