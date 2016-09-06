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
    },
    {
      code: 'type X = {\nfoo: string\n}',
      errors: [{message: 'Must dangle'}],
      output: 'type X = {\nfoo: string,\n}'
    },
    {
      code: 'type X = {\nfoo: string,\n}',
      errors: [{message: 'Must not dangle'}],
      options: ['never'],
      output: 'type X = {\nfoo: string\n}'
    },
    {
      code: 'type X = { foo: string, }',
      errors: [{message: 'Must not dangle'}],
      options: ['always-multiline'],
      output: 'type X = { foo: string }'
    },
    {
      code: 'type X = {\nfoo: string\n}',
      errors: [{message: 'Must dangle'}],
      options: ['always-multiline'],
      output: 'type X = {\nfoo: string,\n}'
    },
    {
      code: 'type X = { foo: string; }',
      errors: [{message: 'Must not dangle'}],
      options: ['only-multiline'],
      output: 'type X = { foo: string }'
    },
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
    },
    {
      code: 'type X = {\nfoo: string,\n}'
    },
    {
      code: 'type X = {\nfoo: string\n}',
      options: ['never'],
    },
    {
      code: 'type X = { foo: string }',
      options: ['always-multiline']
    },
    {
      code: 'type X = {\nfoo: string,\n}',
      options: ['always-multiline']
    },
    {
      code: 'type X = {\nfoo: string;\n}',
      options: ['always-multiline']
    },
    {
      code: 'type X = { foo: string }',
      options: ['only-multiline']
    },
    {
      code: 'type X = {\nfoo: string\n}',
      options: ['only-multiline']
    },
    {
      code: 'type X = {\nfoo: string,\n}',
      options: ['only-multiline']
    },
    {
      code: 'type X = {\nfoo: string;\n}',
      options: ['only-multiline']
    },
  ]
};
