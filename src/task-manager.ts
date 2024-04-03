import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Task {
  name: string;
  done: boolean;
}

@customElement("task-manager")
export class TaskManager extends LitElement {
  static styles = css`
    .textInput {
      width: 70em;
      padding: 1.5em;
      background-color: black;
      border: 2px solid white;
      border-radius: 15px;
      color: white;
      font-size: small;
    }

    .button {
      width: 5em;
      padding: 1.5em;
      background-color: black;
      border: 2px solid white;
      border-radius: 15px;
      color: white;
      font-size: small;
      cursor: pointer;
      text-align: center;
    }

    .taskList {
      height: 25em;
      padding: 1.5em;
      background-color: black;
      border: 2px solid white;
      border-radius: 15px;
      color: white;
      font-size: small;
      margin-top: 2em;
    }

    .task {
      display: flex;
      justify-content: space-between;
      //   padding: 0.5em;
      background-color: black;
      //   border: 2px solid white;
      border-radius: 15px;
      color: white;
      font-size: small;
      align-items: center;
      overflow-x: auto;
      overflow-y: auto;
    }

    .task-text {
      width: 40em;
      padding: 1.5em;
      background-color: black;
      //   border: 2px solid white;
      border-radius: 15px;
      color: white;
      font-size: medium;
      font-weight: bold;
    }

    .btn-delete {
      width: 7em;
      padding: 0.5em;
      background-color: black;
      border: 2px solid white;
      border-radius: 15px;
      color: white;
      font-size: small;
      cursor: pointer;
      text-align: center;
      font-weight: bold;
    }
    .btn-done {
      width: 7em;
      padding: 0.5em;
      background-color: white;
      border: 2px solid white;
      border-radius: 15px;
      color: black;
      font-size: small;
      cursor: pointer;
      text-align: center;
      font-weight: bold;
    }

    .done {
      text-decoration: italic line-through;
    }
  `;

  @property({ type: String }) inputValue = "";
  @property({ type: Array }) tasks: string[] = [];

  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value;
    console.log(this.inputValue);
  }

  handleAdd() {
    if (this.inputValue) {
      this.tasks = [...this.tasks, this.inputValue];
      this.inputValue = "";
    }
    console.log(this.tasks);
  }

  handleDelete(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  handleDone(task: Task) {
    task.done = !task.done;
    this.requestUpdate();
  }

  render() {
    return html`
      <div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            class="textInput"
            .value=${this.inputValue}
            @input=${this.handleInput}
          />
          <button class="button" @click=${this.handleAdd}>+</button>
        </div>
        <div class="taskList">
          ${this.tasks.map(
            (task) => html` <div class="task">
              <p class="task-text">${task}</p>
              <div>
                <button class="btn-done">Done</button>
                <button
                  class="btn-delete"
                  @click=${() => this.handleDelete(task)}
                >
                  Delete
                </button>
              </div>
            </div>`
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-manager": TaskManager;
  }
}
