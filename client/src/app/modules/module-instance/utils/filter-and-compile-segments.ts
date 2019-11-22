import {Injector} from '@angular/core';
import {Role} from '../../../shared/enums/role.enum';
import {ModuleInstanceSegment} from '../../../shared/interfaces/module-instance-segment.interface';
import {ModuleDefinitions} from '../../../shared/interfaces/module.interface';
import {compileSegment} from './compile-segment';
import {Parser} from './parser';

export function filterAndCompileSegments(
  role: Role,
  segments: ModuleInstanceSegment[],
  parser: Parser,
  definitions: ModuleDefinitions,
  injector: Injector,
  value: any
) {
  return segments.reduce((acc, cur) => {
    if (!cur.authorization || cur.authorization.includes(role)) {
      acc.push(
        compileSegment(
          cur,
          parser,
          definitions,
          injector,
          value
        )
      );
    }

    return acc;
  }, []);
}
