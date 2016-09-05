export default {
  invalid: [
    {
      code: 'type X = { foo: string }',
      errors: [{message: 'Must dangle'}],
      output: 'type X = { foo: string, }'
    },
    {
      code: 'type X = { foo: string, }',
      errors: [{message: 'Must not dangle'}],
      options: ['never'],
      output: 'type X = { foo: string }'
    },
    {
      code: 'type X = { foo: string; }',
      errors: [{message: 'Must not dangle'}],
      options: ['never'],
      output: 'type X = { foo: string }'
    }
  ],
  valid: [
    {
      code: 'type X = { foo: string, }'
    },
    {
      code: 'type X = { foo: string; }'
    },
    {
      code: 'type X = { foo: string }',
      options: ['never']
    }
  ]
};
