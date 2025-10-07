const STORAGE = "workouts";

export const getWorkouts = () => {
    const data = localStorage.getItem(STORAGE);
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

export const saveWorkouts = (workouts) => {
    localStorage.setItem(STORAGE, JSON.stringify(workouts))
}