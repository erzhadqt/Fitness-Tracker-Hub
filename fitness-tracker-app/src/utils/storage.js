const STORAGE = "workouts";

export const getWorkouts = () => {
    return JSON.parse(localStorage.getItem(STORAGE)) || [];
}

export const saveWorkouts = (workouts) => {
    localStorage.setItem(STORAGE, JSON.stringify(workouts))
}