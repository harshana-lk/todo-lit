import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import Logo from "./assets/logo.png";

@customElement("main-footer")
export class MainFooter extends LitElement {
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
  `;

  render() {
    return html`
      <div>
        <a href="#" target="_blank">
          <img src=${Logo} class="logo" alt="Main logo" />
        </a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "main-footer": MainFooter;
  }
}
