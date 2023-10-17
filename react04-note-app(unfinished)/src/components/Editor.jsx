import { useState } from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"

export default function Editor({currentNote, updateNote}) {
  const [selectedTab, setSelectedtab] = useState("write")

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklist: true,
  })

  return (
    <section className="pane editor">
        <ReactMde value={currentNote.body} onChange={updateNote} selectedTab={selectedTab} onTabChange={setSelectedtab} generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}  minEditorHeight={80} heightUnits="vh" ></ReactMde>
    </section>
  )
}
