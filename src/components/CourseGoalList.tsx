import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoals } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type Props = {
  goals: CGoals[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: Props) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">Yo have no course yet.Start adding some!</InfoBox>
    );
  }
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collection a lot of goals.Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
