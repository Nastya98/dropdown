import {Module} from "../module";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

/**
 * TODO: Dropdown toggle
 *
 * @param options
 * @constructor
 */
function DropdownToggle(options) {
    let self = this;

    this.options = options;
    this.predefined_options = {
        dropdown_toggle: 'js-dropdown-toggle',
        dropdown_container: 'js-dropdown-container',
        dropdown_list: 'js-dropdown-list'
    };

    this.super();

    init();

    // ------------
    // Инициализация
    // ------------

    function init() {
        setVars();
        setEvents();
    }

    function setVars() {
        self.cache('dropdown-toggle', $('.' + self.options.dropdown_toggle));
        self.cache('dropdown-list', $('.' + self.options.dropdown_list));
        self.cache('dropdown-container', $('.' + self.options.dropdown_container))
    }

    function setEvents() {
        self.cache('dropdown-container').on('click', onToggleOpen);
        $(document).on('click', onCloseLang)
    }

    // ------------
    // События
    // ------------

    function onToggleOpen() {
        self.cache('dropdown-container').toggleClass('open');
    }

    function onCloseLang(e) {
        if (!$(e.target).closest(self.cache('dropdown-container')).length) {
            self.cache('dropdown-container').removeClass('open');
        }
        e.stopPropagation();
    }

}

DropdownToggle.prototype = new Module();


export {DropdownToggle};
