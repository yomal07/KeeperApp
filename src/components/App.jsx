import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";



function App(){
    return <div>
        <Header />
        {notes.map(oneNote =>  <Note 
        title = {oneNote.title}
        description = {oneNote.content}
    />

)}
        <Footer />
    </div>
}

export default App