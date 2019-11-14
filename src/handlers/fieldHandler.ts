import {Field} from '../types/Field';
import {FieldsOfType} from '../types/FieldsOfType';

import {fields} from '../objects/fields';

export const fieldHandler = function fieldHandler (
  list: Array<Field | FieldsOfType>
): string {
  return list
    .map((item) => {
      let fieldsOfType: string[] | undefined;
      Object.values(fields)
        .forEach((value) => {
          if (item === value) {
            fieldsOfType = Object.values(item);
          }
        });
      if (typeof fieldsOfType !== 'undefined') {
        return fieldsOfType;
      }
      return item;
    })
    .flat(1)
    .join(';');
};
