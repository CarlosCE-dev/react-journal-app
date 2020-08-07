import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />

                <textarea 
                    placeholder="What happend today?"
                    className="notes__textarea">
                </textarea>

                <div className="notes__image">
                    <img src="https://konachan.net/image/784e230ac8d9aa8681298c28a2246536/Konachan.com%20-%20312660%20ass%20hokori_sakuni%20hololive%20long_hair%20minato_aqua%20nopan%20pink_eyes%20pink_hair%20thighhighs%20tiara%20twintails%20wedding_attire.jpg"
                        alt="Imagen"/>
                </div>
            </div>
        </div>
    )
}
