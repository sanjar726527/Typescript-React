import { type PropsWithChildren } from "react";


type Props = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

export default function CourseGoal({ id, title, children, onDelete }: Props) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}
