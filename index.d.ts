import { LitElement } from "lit";

export interface Task {
  name: string;
  done: boolean;
}

export declare class TaskManager extends LitElement {
  inputValue: string;
  tasks: Task[];

  handleInput(event: Event): void;
  handleAdd(): void;
  handleDelete(task: Task): void;
  handleDone(task: Task): void;
}
