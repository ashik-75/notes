import { motion as m } from "framer-motion";
import { Trash, Trash2, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../../components/Spinner";
import { cn } from "../../utils/cn";
import { sleep } from "../../utils/sleep";
import SelectCategory from "./CategorySelector";

interface NoteType {
  id: number;
  message: string;
  category: string;
}

interface CategoryType {
  id: number;
  name: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<NoteType[]>(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      return JSON.parse(notes);
    }
    return [];
  });
  const [categories, setCategories] = useState<CategoryType[]>(() => {
    const categories = localStorage.getItem("categories");

    if (categories) {
      return JSON.parse(categories);
    }

    return [];
  });
  const [selectedCat, setSelectedCat] = useState<CategoryType[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<NoteType[]>(notes);

  useEffect(() => {
    if (selectedCat.length > 0) {
      const result = notes.filter((note) =>
        Boolean(selectedCat.find((s) => s.name === note.category))
      );
      setFilteredNotes(result);
    } else {
      setFilteredNotes(notes);
    }
  }, [selectedCat, notes]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [notes, categories]);

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-0">
      <div className="grid min-h-[50vh] grid-cols-1 sm:grid-cols-4 ">
        <div className="p-5">
          <div>
            <CategoryForm setCategories={setCategories} />
          </div>

          <div>
            <CategoryList
              setSelectedCat={setSelectedCat}
              categories={categories}
              selectedCat={selectedCat}
            />
          </div>
        </div>

        <div className="col-span-3 p-5">
          <div>
            <NoteForm categories={categories} setNotes={setNotes} />
          </div>

          <div className="flex">
            <CategorySelector
              selectedCat={selectedCat}
              setSelectedCat={setSelectedCat}
            />
          </div>

          {/* show all the notes */}

          <div className="mt-5">
            {filteredNotes.length > 0 ? (
              <NoteList notes={filteredNotes} setNotes={setNotes} />
            ) : (
              <div>No Notes available here</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;

function CategorySelector({
  selectedCat,
  setSelectedCat,
}: {
  selectedCat: CategoryType[];
  setSelectedCat: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}) {
  const handleRemove = (payload: CategoryType) => {
    setSelectedCat((prev) => prev.filter((c) => c.id !== payload.id));
  };
  return (
    <m.div className="mt-5 flex flex-wrap gap-3">
      {selectedCat?.map((cat) => (
        <m.div
          layout="position"
          key={cat.id}
          className="py-.5 flex w-fit gap-2 rounded-full  border border-zinc-600 pl-2"
        >
          <span>{cat.name}</span>
          <button
            onClick={() => handleRemove(cat)}
            className="  py-.5 cursor-pointer  rounded-full bg-rose-700 px-1 text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </m.div>
      ))}
    </m.div>
  );
}

function NoteForm({
  setNotes,
  categories,
}: {
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
  categories: CategoryType[];
}) {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({ name: "" });
  const [message, setMessage] = useState("");

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (category.name && message) {
      await sleep(500);
      toast.success("Note Added");
      setLoading(false);
      setNotes((prev) => [
        {
          id: Date.now(),
          message,
          category: category.name,
        },
        ...prev,
      ]);
      setCategory({ name: "" });
      setMessage("");
    } else {
      toast.error("Both field are required, please fill these  field");
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleForm} className="max-w-md space-y-2">
      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="write something ...."
          className="h-24 w-full rounded border  border-zinc-600 bg-transparent p-2 outline-none placeholder:text-sm placeholder:text-zinc-500"
        />
      </div>

      <div>
        <SelectCategory
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div>
        <m.button
          layout="position"
          className="rounded border border-zinc-500 px-2 py-1.5 text-sm"
        >
          {loading ? <Spinner /> : "add Note"}
        </m.button>
      </div>
    </form>
  );
}

function NoteList({
  notes,
  setNotes,
}: {
  notes: NoteType[];
  setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
}) {
  const deleteNote = (noteId: number) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== noteId));
  };
  return (
    <m.div
      layout
      className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
    >
      {notes?.map((note) => (
        <m.div
          layout
          key={note.id}
          className="relative rounded-lg border border-zinc-600 p-5"
        >
          <h1 className="mb-2 font-bold">{note.message}</h1>
          <span className="rounded-full border border-zinc-600  px-2 py-1 text-xs text-white">
            {note.category}
          </span>

          <button
            onClick={() => deleteNote(note.id)}
            className="absolute bottom-5 right-5"
          >
            <Trash className="h-5 w-5" />
          </button>
        </m.div>
      ))}
    </m.div>
  );
}

function CategoryForm({
  setCategories,
}: {
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
}) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (formData.name) {
      await sleep(500);
      toast.success("New Category Added");
      setLoading(false);
      setCategories((prev) => [
        {
          id: Date.now(),
          name: formData.name,
        },
        ...prev,
      ]);
      setFormData({
        name: "",
      });
    } else {
      toast.error("Both field are required, please fill these  field");
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleForm} className="flex max-w-md space-x-2">
      <div>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="category name ..."
          className=" h-full w-full rounded border border-zinc-600 bg-transparent  px-3 py-2 outline-none placeholder:text-sm placeholder:text-zinc-600"
        />
      </div>

      <div>
        <m.button
          layout="position"
          className="rounded border border-zinc-600 px-3 py-2 text-sm text-zinc-500"
        >
          {loading ? <Spinner width={18} height={18} /> : "add"}
        </m.button>
      </div>
    </form>
  );
}

function CategoryList({
  categories,
  setSelectedCat,
  selectedCat,
}: {
  categories: CategoryType[];
  setSelectedCat: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  selectedCat: CategoryType[];
}) {
  const handleSelectCategory = (payload: CategoryType) => {
    if (selectedCat.find((cat) => cat.id === payload.id)) {
      setSelectedCat((prev) => prev.filter((c) => c.id !== payload.id));
    } else {
      setSelectedCat((prev) => [...prev, payload]);
    }
  };

  return (
    <m.div layout className="mt-5 flex flex-row flex-wrap gap-3 sm:flex-col">
      {categories?.map((cat) => (
        <div
          key={cat.id}
          onClick={() => handleSelectCategory(cat)}
          className={cn(
            "group flex w-fit min-w-[100px] items-center justify-center rounded-full border border-zinc-700 px-3 py-1 capitalize",
            selectedCat.find((c) => c.name === cat.name) && "bg-zinc-700"
          )}
        >
          <span>{cat.name}</span>

          <m.button className="hidden group-hover:visible">
            <Trash2 className="h-5 w-5" />
          </m.button>
        </div>
      ))}
    </m.div>
  );
}
