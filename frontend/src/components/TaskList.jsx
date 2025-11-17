import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EditModal from "./EditModal";

export default function TaskList({ tasks = [], onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(null);

  if (!Array.isArray(tasks)) return null;

  return (
    <div className="mt-4 space-y-2">
      <AnimatePresence>
        {tasks.map(task => (
          <motion.div layout initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} key={task.id} className="p-3 rounded-md border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.is_completed} onChange={() => onToggle(task)} />
              <div>
                <div className={`${task.is_completed ? 'line-through text-gray-400' : 'font-medium'}`}>{task.title}</div>
                <div className="text-xs text-gray-500">{task.category} • {task.due_date}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditing(task)} className="text-sm px-3 py-1 rounded-md bg-gray-100">Edit</button>
              <button onClick={() => onDelete(task.id)} className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-600">Delete</button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {editing && <EditModal task={editing} onClose={() => setEditing(null)} onSave={(patch) => { onEdit(editing.id, patch); setEditing(null); }} />}
    </div>
  );
}
