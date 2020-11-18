/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/vaadin-grid-tree-toggle.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';

import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {DirMixin} from '@vaadin/vaadin-element-mixin/vaadin-dir-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {isFocusable} from './vaadin-grid-active-item-mixin.js';

import {microTask} from '@polymer/polymer/lib/utils/async.js';

/**
 * `<vaadin-grid-tree-toggle>` is a helper element for the `<vaadin-grid>`
 * that provides toggle and level display functionality for the item tree.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-column>
 *   <template class="header">Package name</template>
 *   <template>
 *     <vaadin-grid-tree-toggle
 *         leaf="[[!item.hasChildren]]"
 *         expanded="{{expanded}}"
 *         level="[[level]]">
 *       [[item.name]]
 *     </vaadin-grid-tree-toggle>
 *   </template>
 * </vaadin-grid-column>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `toggle` | The tree toggle icon
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * ---|---|---
 * `expanded` | When present, the toggle is expanded | :host
 * `leaf` | When present, the toggle is not expandable, i. e., the current item is a leaf | :host
 *
 * The following custom CSS properties are available on
 * the `<vaadin-grid-tree-toggle>` element:
 *
 * Custom CSS property | Description | Default
 * ---|---|---
 * `--vaadin-grid-tree-toggle-level-offset` | Visual offset step for each tree sublevel | `1em`
 */
declare class GridTreeToggleElement extends
  ThemableMixin(
  PolymerElement) {

  /**
   * Current level of the tree represented with a horizontal offset
   * of the toggle button.
   */
  level: number;

  /**
   * Hides the toggle icon and disables toggling a tree sublevel.
   */
  leaf: boolean;

  /**
   * Sublevel toggle state.
   */
  expanded: boolean;
  ready(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-grid-tree-toggle": GridTreeToggleElement;
  }
}

export {GridTreeToggleElement};
