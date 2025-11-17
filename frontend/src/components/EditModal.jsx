import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EditModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title || "");
  const [due_date, setDueDate] = useState(task.due_date || "");
  const [category, setCategory] = useState(task.category || "No Category");

  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white rounded-lg p-6 w-full max-w-md z-10">
        <h3 className="font-medium mb-3">Edit Task</h3>
        <div className="space-y-3">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded-md p-2" />
          <input type="date" value={due_date} onChange={(e) => setDueDate(e.target.value)} className="w-full border rounded-md p-2" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded-md p-2" />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2">Cancel</button>
          <button onClick={() => onSave({ title, due_date, category })} className="px-4 py-2 bg-purple-600 text-white rounded-md">Save</button>
        </div>
      </motion.div>
    </div>
  );
}
