import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast} from "sonner"

export function NewNoteCard() {
  const [shouldShowOnboargind, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value === "") {
      setShouldShowOnboarding(true);
    }
    setContent(event.target.value);
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();
    console.log(content)
    toast.success("Nota criada com sucesso!");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 text-left p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-md font-medium text-slate-200 ">
          Adicionar nota
        </span>
        <p className="text-sm leading-4 text-slate-400">
          Grave uma nota em audio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 text-slate-400 p-1.5">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-md font-medium text-slate-200 ">
                Adicionar Nota
              </span>
              {shouldShowOnboargind ? (
                <p className="text-sm leading-4 text-slate-400 ">
                  comece{" "}
                  <button className="font-medium text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em audio ou se preferir{" "}
                  <button
                    className="font-medium text-lime-400 hover:underline"
                    onClick={handleStartEditor}
                  >
                    utilize apenas texto
                  </button>
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-start leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChanged}
                ></textarea>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-900 outline-none font-semibold hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
