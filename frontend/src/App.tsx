import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import './App.css'

function Home() {
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

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
