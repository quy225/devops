import { useEffect, useState } from 'react'
import './App.css'

function App() {
  type Task = {
    _id: string
    name: string
  }

  const [tasks, setTasks] = useState<Task[]>([])
  const [name, setName] = useState('')

  // lấy data từ backend
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks")
      const data = await res.json()
      setTasks(data)
    } catch (err) {
      console.log(err)
    }
  }

  // thêm task
  const addTask = async () => {
    if (!name) return

    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })

    setName('')
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevOps App 🚀</h1>

      {/* form */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập task..."
      />
      <button onClick={addTask}>Thêm</button>

      {/* list */}
      <div style={{ marginTop: "20px" }}>
        {tasks.length === 0 ? (
          <p>Chưa có task</p>
        ) : (
          tasks.map((t) => (
            <p key={t._id}>- {t.name}</p>
          ))
        )}
      </div>
    </div>
  )
}

export default App
