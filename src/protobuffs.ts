import { Type, Field } from 'protobufjs/light'

export const SimpleArgumentsType = new Type('SimpleArguments')
  .add(new Field('foo', 1, 'string'))
  .add(new Field('bar', 2, 'float'))
  .add(new Field('baz', 3, 'int32'))
  .add(new Field('zoo', 4, 'bool'))
 