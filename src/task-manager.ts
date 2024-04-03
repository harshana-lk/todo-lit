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
  `;
  render() {
    return html`
      <div>
        <input type="text" placeholder="Type here" class="textInput" />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-manager": TaskManager;
  }
}
