/** Handle filter menu activation. */

class Filter {
  constructor(isMobile) {
    this.isMobile = isMobile;
    this.el = {
      sidebar: document.querySelector('#filter-sidebar'),
      filter: document.querySelector('#filter'),
      select: document.querySelector('#hidden-select'),
      title: document.querySelector('#filter-title'),
      dropdown: document.querySelector('#filter-dropdown'),
    };
    this.match = {
      href: window.location.href.replace(/\//g, ''),
      pathname: window.location.pathname.replace(/\//g, ''),
    };
    if (this.el.sidebar) {
      this.initSidebar();
    }
    if (this.el.filter) {
      this.initDropdown();
    }
  }

  initSidebar() {
    // set active sidebar
    const items = this.el.sidebar.querySelectorAll('.sidebar-item');
    for (let i=0, lim=items.length; i<lim; ++i) {
      const el = items[i];
      const a = el.querySelector('a');
      if (a && a.href) {
        const match = a.href.replace(/\//g, '');
        if (match == this.match.href || match == this.match.pathname) {
          el.classList.add('active');
          break;
        }
      }
    }

    // hide/show if off/on window
    this.visibleThreshold = 4;
    window.addEventListener('resize', () => { this.resize(); });
    this.resize();
  }

  initDropdown() {
    // build the select dropdown
    for (let i=0, lim=this.el.select.options.length; i<lim; ++i) {
      const el = this.el.select.options[i];
      if (el.value) {
        // check if active
        const match = el.value.replace(/\//g, '');
        if (match == this.match.href || match == this.match.pathname) {
          this.el.title.innerHTML = el.innerHTML + '&nbsp;<i class="arrow"></i>'
        }

        // add new div to dropdown
        const div = document.createElement('div');
        div.classList.add('dropdown-item');
        div.dataset.value = el.value;
        div.innerHTML = el.innerHTML;
        this.el.dropdown.appendChild(div);
      }
    }

    // bind events
    document.addEventListener('click', evt => {
      if (evt.target.classList.contains('dropdown-item')) {
        const href = evt.target.dataset.value;
        if (href) {
          window.location.href = href;
        }
      } else if (this.el.dropdown.classList.contains('active') && !evt.target.classList.contains('filter-title')) {
        this.el.dropdown.classList.remove('active');
      }
    });
    window.addEventListener('scroll', () => {
      this.el.dropdown.classList.remove('active');
    });
    this.el.title.addEventListener('click', e => {
      this.setDropdownPosition();
      this.el.dropdown.classList.toggle('active');
    });

    // listen for change
    this.el.select.onchange = () => {
      window.location.href = this.el.select.value;
    };
  }

  setDropdownPosition() {
    const rect = this.el.title.getBoundingClientRect();
    const x = rect.left + rect.width - this.el.dropdown.clientWidth;
    const y = rect.top + rect.height;
    this.el.dropdown.style.top = `${y}px`;
    this.el.dropdown.style.left = `${x}px`;
  }

  resize() {
    // check if sidebar on screen
    const rect = this.el.sidebar.getBoundingClientRect();
    if (rect.left > this.visibleThreshold) {
      this.el.sidebar.classList.add('active');
    } else {
      this.el.sidebar.classList.remove('active');
    }

    // set dropdown position
    this.setDropdownPosition();
  }
}

export { Filter };
