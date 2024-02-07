export function NewNoteCard(){
    return(
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-md font-medium text-slate-200 ">
            Adicionar nota
          </span>
          <p className="text-sm leading-4 text-slate-400">
            Grave uma nota em audio que será convertida para texto
            automaticamente.
          </p>
        </div>
    )
}