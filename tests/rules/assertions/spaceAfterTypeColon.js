export default {
    invalid: [
        {
            code: '(foo: string) => {}',
            errors: [
                {
                    message: 'There must be no space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'never'
            ]
        },
        {
            code: 'export default function (foo: string) {}',
            errors: [
                {
                    message: 'There must be no space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'never'
            ]
        },
        {
            code: 'function foo (foo: string) {}',
            errors: [
                {
                    message: 'There must be no space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'never'
            ]
        },
        {
            code: '(foo:string) => {}',
            errors: [
                {
                    message: 'There must be a space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: 'function foo (foo:string) {}',
            errors: [
                {
                    message: 'There must be a space after "foo" parameter type annotation colon.'
                }
            ]
        },
        {
            code: '(foo:  string) => {}',
            errors: [
                {
                    message: 'There must be 1 space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: '(foo:(() => void)) => {}',
            errors: [
                {
                    message: 'There must be a space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: '(foo: (() => void)) => {}',
            errors: [
                {
                    message: 'There must be no space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'never'
            ]
        },
        {
            code: '(foo:  (() => void)) => {}',
            errors: [
                {
                    message: 'There must be 1 space after "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: '():Object => {}',
            errors: [
                {
                    message: 'There must be a space after return type colon.'
                }
            ],
            options: [
                'always'
            ]
        }, {
            code: '(): Object => {}',
            errors: [
                {
                    message: 'There must be no space after return type colon.'
                }
            ],
            options: [
                'never'
            ]
        }, {
            code: '():  Object => {}',
            errors: [
                {
                    message: 'There must be 1 space after return type colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: '():(() => void) => {}',
            errors: [
                {
                    message: 'There must be a space after return type colon.'
                }
            ],
            options: [
                'always'
            ]
        }, {
            code: '(): (() => void) => {}',
            errors: [
                {
                    message: 'There must be no space after return type colon.'
                }
            ],
            options: [
                'never'
            ]
        }, {
            code: '():  (() => void) => {}',
            errors: [
                {
                    message: 'There must be 1 space after return type colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: 'type X = { name:string }',
            errors: [
                {
                    message: 'There must be a space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name?:string }',
            errors: [
                {
                    message: 'There must be a space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name:?string }',
            errors: [
                {
                    message: 'There must be a space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name:  ?string }',
            errors: [
                {
                    message: 'There must be 1 space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name:?  string }',
            errors: [
                {
                    message: 'There must be a space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name?:?string }',
            errors: [
                {
                    message: 'There must be a space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name?:  ?string }',
            errors: [
                {
                    message: 'There must be 1 space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name:string }',
            errors: [
                {
                    message: 'There must be a space after "name" object type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: 'type X = { bar:  string }',
            errors: [
                {
                    message: 'There must be 1 space after "bar" object type annotation colon.'
                }
            ]
        },
        {
            code: 'const D: { name:string[] } = {}',
            errors: [
                {
                    message: 'There must be a space after "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type Q = { name: string }',
            errors: [
                {
                    message: 'There must be no spaces after "name" object type annotation colon.'
                }
            ],
            options: [
                'never'
            ]
        }
    ],
    valid: [
        {
            code: '(foo) => {}'
        },
        {
            code: '(foo: string) => {}'
        },
        {
            code: 'function x(foo: string) {}'
        },
        {
            code: 'class Foo { constructor(foo: string) {} }'
        },
        {
            code: '(foo: (string|number)) => {}'
        },
        {
            code: '(foo:string) => {}',
            options: [
                'never'
            ]
        },
        {
            code: 'function x(foo:string) {}',
            options: [
                'never'
            ]
        },
        {
            code: 'class Foo { constructor(foo:string) {} }',
            options: [
                'never'
            ]
        },
        {
            code: '(foo: string) => {}',
            options: [
                'always'
            ]
        },
        {
            code: '(foo:(() => void)) => {}',
            options: [
                'never'
            ]
        },
        {
            code: '(foo: (() => void)) => {}',
            options: [
                'always'
            ]
        },
        {
            code: '():Object => {}',
            options: [
                'never'
            ]
        },
        {
            code: '(): Object => {}',
            options: [
                'always'
            ]
        },
        {
            code: '():(number | string) => {}',
            options: [
                'never'
            ]
        },
        {
            code: '(): (number | string) => {}',
            options: [
                'always'
            ]
        },
        {
            code: '():number|string => {}',
            options: [
                'never'
            ]
        },
        {
            code: '(): number|string => {}',
            options: [
                'always'
            ]
        },
        {
            code: '():(() => void) => {}',
            options: [
                'never'
            ]
        }, {
            code: '(): (() => void) => {}',
            options: [
                'always'
            ]
        }, {
            code: '():( () => void ) => {}',
            options: [
                'never'
            ]
        }, {
            code: '(): ( () => void ) => {}',
            options: [
                'always'
            ]
        },
        {
            code: 'type X = { name: string }'
        },
        {
            code: 'type X = { name?: string }'
        },
        {
            code: 'type X = { name: ?string }'
        },
        {
            code: 'type X = { name?: ?string }'
        },
        {
            code: 'type X = { name: string }',
            options: [
                'always'
            ]
        },
        {
            code: 'const D: { name: string[] } = {}'
        },
        {
            code: 'type X = { name:string }',
            options: [
                'never'
            ]
        },
        {
            code: 'const D:{ name:string[] } = {}',
            options: [
                'never'
            ]
        }
    ]
};
