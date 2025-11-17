import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskForm({ onCreate, categories }) {
  const [title, setTitle] = useState("");
  const [due_date, setDueDate] = useState("");
  const [cat, setCat] = useState("No Category");
  const [showNew, setShowNew] = useState(false);
  const [newCat, setNewCat] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title: title.trim(), due_date: due_date || null, category: cat });
    setTitle(""); setDueDate(""); setCat("No Category");
  }

  return (
    <motion.form onSubmit={submit} className="mt-4 space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex gap-2">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="What needs to be done?" className="flex-1 rounded-md border p-3" />
        <button type="submit" className="p-3 rounded-md bg-purple-600 text-white" aria-label="submit">➤</button>
      </div>

      <div className="flex gap-2 items-center">
        <input type="date" value={due_date} onChange={e => setDueDate(e.target.value)} className="rounded-md border p-2" />
        <div className="relative">
          <select value={cat} onChange={e => { if (e.target.value === "__new__") { setShowNew(true); setCat("No Category"); } else setCat(e.target.value); }} className="rounded-md border p-2">
            {categories.map(c => <option key={c}>{c}</option>)}
            <option value="__new__">+ Create New</option>
          </select>
        </div>
      </div>

      <AnimatePresence>
        {showNew && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="flex gap-2 mt-2">
              <input value={newCat} onChange={e => setNewCat(e.target.value)} placeholder="New category" className="flex-1 rounded-md border p-2" />
              <button type="button" onClick={() => { if (newCat.trim()) { setCat(newCat.trim()); setShowNew(false); setNewCat(""); } }} className="px-4 py-2 bg-gray-100 rounded-md">Add</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
