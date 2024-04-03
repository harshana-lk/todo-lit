import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

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
      height: 35em;
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
      padding: 0.5em;
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
  `;
  render() {
    return html`
      <div>
        <div>
          <input type="text" placeholder="Type here" class="textInput" />
          <button class="button">+</button>
        </div>
        <div class="taskList">
          <div class="task">
            <p class="task-text">This is a task list</p>
            <div>
              <button class="btn-done">Done</button>
              <button class="btn-delete">Delete</button>
            </div>
          </div>
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
