/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/vaadin-grid-array-data-provider-mixin.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

export {ArrayDataProviderMixin};

declare function ArrayDataProviderMixin<T extends new (...args: any[]) => {}>(base: T): T & ArrayDataProviderMixinConstructor;

interface ArrayDataProviderMixinConstructor {
  new(...args: any[]): ArrayDataProviderMixin;
}

export {ArrayDataProviderMixinConstructor};

interface ArrayDataProviderMixin {

  /**
   * An array containing the items which will be stamped to the column template
   * instances.
   */
  items: GridItem[]|null|undefined;
  _arrayDataProvider(opts: GridDataProviderParams|null, cb: GridDataProviderCallback|null): void;

  /**
   * Check array of filters/sorters for paths validity, console.warn invalid items
   *
   * @param arrayToCheck The array of filters/sorters to check
   * @param action The name of action to include in warning (filtering, sorting)
   */
  _checkPaths(arrayToCheck: Array<GridFilter|GridSorter>, action: string, items: GridItem[]): any;
  _multiSort(a: unknown|null, b: unknown|null): number;
  _normalizeEmptyValue(value: unknown|null): string;
  _compare(a: unknown|null, b: unknown|null): number;
  _filter(items: GridItem[]): GridItem[];
}

import {GridItem} from '../@types/interfaces';

import {GridDataProviderParams} from '../@types/interfaces';

import {GridDataProviderCallback} from '../@types/interfaces';

import {GridFilter} from '../@types/interfaces';

import {GridSorter} from '../@types/interfaces';
