import { useEffect, useState } from 'react'

function About() {
    type Info = {
        name: string
        studentId: string
        class: string
    }

    const [info, setInfo] = useState<Info | null>(null)

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const res = await fetch("http://localhost:5000/about")
                const data = await res.json()

                setInfo(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchInfo()
    }, [])

    return (
        <div style={{ padding: "20px" }}>
            <h1>Thông tin cá nhân</h1>
            {info ? (
                <div>
                    <p><strong>Họ tên:</strong> {info.name}</p>
                    <p><strong>Mã số sinh viên:</strong> {info.studentId}</p>
                    <p><strong>Lớp:</strong> {info.class}</p>
                </div>
            ) : (
                <p>Đang tải...</p>
            )}
        </div>
    )
}

export default About
