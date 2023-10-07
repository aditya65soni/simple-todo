import React, { useEffect, useState } from "react";

const CreateNote = ({ addData, editableNote, updateNote }) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [show, setShow] = useState(false);

    const onChangeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        setNote({ ...note, [name]: value });
    };
    // console.log(note);

    const onclicHandle = (e) => {
        e.preventDefault();

        if (editableNote) {
            updateNote(note);
        } else {
            if (note.title !== "") {
                addData(note);
            }
        }

        setNote({
            title: "",
            content: "",
        });
    };

    useEffect(() => {
        if (editableNote) {
            setNote(editableNote);
        }
    }, [editableNote]);

    const showHandle = () => {
        setShow(true);
    };

    return (
        <>
            <div className="flex justify-center items-center" onClick={showHandle}>
                <form className="flex justify-center items-center flex-col bg-purple-200 space-y-3 rounded-xl h-[13rem] mt-3">
                    <input
                        onChange={onChangeHandle}
                        value={note.title}
                        className="p-3 m-2 rounded-lg"
                        type="text"
                        placeholder="title"
                        name="title"
                    />
                    {show ? (
                        <textarea
                            onChange={onChangeHandle}
                            value={note.content}
                            name="content"
                            id="content"
                            cols="30"
                            rows="5"
                            placeholder="write here"
                            className="p-3 m-2 rounded-lg"
                        ></textarea>
                    ) : null}
                    {show ? (
                        <button
                            onClick={onclicHandle}
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            {editableNote ? "edit" : "add"}
                        </button>
                    ) : null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;
