// Header Component with Navigation using Fomantic UI
class AppHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <div class="ui inverted blue menu">
        <div class="ui container">
          <a href="/" class="header item">
            <i class="shield icon"></i>
            Northwind Traders
          </a>
          <a href="#customers" class="item">
            <i class="users icon"></i>
            Customers
          </a>
          <a href="#about" class="item">
            <i class="info circle icon"></i>
            About
          </a>
        </div>
      </div>
    `;
    }
}

// Register the custom element
customElements.define('app-header', AppHeader);
