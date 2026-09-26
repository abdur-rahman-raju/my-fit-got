import { TWorkout } from "./Api";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";


export const getPlan = (): TWorkout[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(PLAN_KEY);

  return data ? JSON.parse(data) : [];
};

export const addToPlan = (workout: TWorkout) => {
  const plan = getPlan();

  if (plan.length >= 5) {
    return false;
  }

  const alreadyExists = plan.some(
    (item) => item.id === workout.id
  );

  if (alreadyExists) {
    return false;
  }

  localStorage.setItem(
    PLAN_KEY,
    JSON.stringify([...plan, workout])
  );

  return true;
};

export const removeFromPlan = (id: number) => {
  const plan = getPlan();

  const updatedPlan = plan.filter(
    (workout) => workout.id !== id
  );

  localStorage.setItem(
    PLAN_KEY,
    JSON.stringify(updatedPlan)
  );

  return updatedPlan;
};

export const markAsDone = (id: number) => {
  const plan = getPlan();

  const updatedPlan = plan.map((workout) =>
    workout.id === id
      ? { ...workout, completed: true }
      : workout
  );

  localStorage.setItem(
    PLAN_KEY,
    JSON.stringify(updatedPlan)
  );

  return updatedPlan;
};



export const getSaved = (): TWorkout[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(SAVED_KEY);

  return data ? JSON.parse(data) : [];
};

export const addToSaved = (workout: TWorkout) => {
  const saved = getSaved();

  const alreadyExists = saved.some(
    (item) => item.id === workout.id
  );

  if (alreadyExists) {
    return false;
  }

  localStorage.setItem(
    SAVED_KEY,
    JSON.stringify([...saved, workout])
  );

  return true;
};

export const removeFromSaved = (id: number) => {
  const saved = getSaved();

  const updatedSaved = saved.filter(
    (workout) => workout.id !== id
  );

  localStorage.setItem(
    SAVED_KEY,
    JSON.stringify(updatedSaved)
  );

  return updatedSaved;
};