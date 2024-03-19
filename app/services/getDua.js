export default async function getDua(category) {
    const res = await fetch(`https://ird-task-backend-d911.onrender.com/${category}/dua`, { cache: 'no-cache' })
    const data = await res.json()
    return data.data
}

