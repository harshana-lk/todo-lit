import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import Logo from "./assets/logo.png";

interface Task {
  name: string;
  done: boolean;
}

@customElement("task-manager")
export class TaskManager extends LitElement {
  @property({ type: String }) inputValue = "";
  @property({ type: Array }) tasks: Task[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.loadTasks();
  }

  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value;
    console.log(this.inputValue);
  }

  handleAdd() {
    if (this.inputValue) {
      this.tasks = [...this.tasks, { name: this.inputValue, done: false }];
      this.inputValue = "";
      this.saveTasks();
    }
    console.log(this.tasks);
  }

  handleDelete(task: Task) {
    this.tasks = this.tasks.filter((t) => t !== task);
    this.saveTasks();
  }

  handleDone(task: Task) {
    task.done = !task.done;
    this.requestUpdate();
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  render() {
    return html`
      <div>
        <div>
          <a href="#" target="_blank">
            <img src=${Logo} class="logo" alt="Main logo" />
          </a>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            class="textInput"
            .value=${this.inputValue}
            @input=${this.handleInput}
          />
          <button class="button" @click=${this.handleAdd}>
            <p class="btn-add">🔖 ToDo</p>
          </button>
        </div>
        <div class="taskList">
          ${this.tasks.map(
            (task) => html` <div class="task">
              <p
                class="task-text"
                style="text-decoration: ${task.done ? "line-through" : "none"}"
              >
                ${task.name}
              </p>
              <div>
                <button class="btn-done" @click=${() => this.handleDone(task)}>
                  Done
                </button>
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

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }
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
      // width: 5em;
      padding: 0 1.5em;
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
      overflow: auto;
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
      overflow: auto;
    }

    .task-text {
      width: 40em;
      // padding: 1.5em;
      background-color: black;
      //   border: 2px solid white;
      border-radius: 15px;
      color: white;
      font-size: medium;
      // font-weight: bold;
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

    .btn-add {
      border-radius: 15px;
      color: white;
      font-size: small;
      cursor: pointer;
      text-align: center;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .done {
      text-decoration: italic line-through;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "task-manager": TaskManager;
  }
}
