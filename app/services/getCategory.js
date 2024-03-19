
export default async function getCategory() {
    const res = await fetch(`https://ird-task-backend-d911.onrender.com/category`)
    const data = await res.json()
    return data
}