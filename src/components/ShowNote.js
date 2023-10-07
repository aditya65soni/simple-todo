import React from 'react'

const ShowNote = ({ notesdata, deleteNote, editNote }) => {

    const onDelete = (index) => {
        deleteNote(index)
    }

    const onEdit = (id) => {
        editNote(id)
    }

    return (
        <div className="container m-auto grid grid-cols-4 gap-2 mt-5">
            {notesdata.map((val, index) => (
                <div className='flex flex-col justify-center items-center bg-pink-400 text-white h-[13rem] w-[15rem] space-y-3 rounded-xl m-auto' key={val.id}>
                    <div></div>
                    <div className='p-3 '><span className='font-bold text-blue-950'>Title</span>: {val.title}</div>
                    <div className='p-3 overflow-auto'><span className='font-bold text-blue-950'>Content</span>: {val.content}</div>
                    <div>
                        <button className='bg-red-500 p-2 mr-2 rounded-lg hover:bg-red-600' onClick={() => onDelete(index)}>delete</button>
                        <button className='bg-blue-500 p-2 rounded-lg hover:bg-blue-600' onClick={() => onEdit(val.id)}>edit</button>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowNote