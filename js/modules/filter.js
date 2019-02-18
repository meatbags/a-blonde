/** Handle filter menu activation. */

class Filter {
  constructor() {
    this.target = document.querySelector('#filter-sidebar');
    if (this.target) {
      this.init();
    }
  }

  init() {
    // set active sidebar
    const href = window.location.href.replace(/\//g, '');
    const pathname = window.location.pathname.replace(/\//g, '');
    const items = this.target.querySelectorAll('.sidebar-item');
    for (let i=0, lim=items.length; i<lim; ++i) {
      const el = items[i];
      const a = el.querySelector('a');
      if (a && a.href) {
        const match = a.href.replace(/\//g, '');
        if (match == href || match == pathname) {
          el.classList.add('active');
          break;
        }
      }
    }

    // set active select filter
    this.selectTarget = document.querySelector('#filter-select');
    if (this.selectTarget) {
      for (let i=0, lim=this.selectTarget.options.length; i<lim; ++i) {
        const el = this.selectTarget.options[i];
        if (el.value) {
          const match = el.value.replace(/\//g, '');
          if (match == href || match == pathname) {
            this.selectTarget.value = el.value;
            break;
          }
        }
      }

      // listen for change
      this.selectTarget.onchange = () => {
        window.location.href = this.selectTarget.value;
      };
    }

    // hide/show if off/on window
    this.visibleThreshold = 4;
    window.addEventListener('resize', () => { this.resize(); });
    this.resize();
  }

  resize() {
    const rect = this.target.getBoundingClientRect();
    if (rect.left > this.visibleThreshold) {
      this.target.classList.add('active');
    } else {
      this.target.classList.remove('active');
    }
  }
}

export { Filter };
