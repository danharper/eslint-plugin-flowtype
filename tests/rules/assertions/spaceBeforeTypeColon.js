export default {
    invalid: [
        {
            code: '(foo : string) => {}',
            errors: [
                {
                    message: 'There must be no space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'never'
            ]
        },
        {
            code: '(foo ?: string) => {}',
            errors: [
                {
                    message: 'There must be no space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'never'
            ]
        },
        {
            code: '(foo: string) => {}',
            errors: [
                {
                    message: 'There must be a space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: '(foo  : string) => {}',
            errors: [
                {
                    message: 'There must be 1 space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: '(foo?: string) => {}',
            errors: [
                {
                    message: 'There must be a space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: '(foo  ?: string) => {}',
            errors: [
                {
                    message: 'There must be 1 space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: 'function x(foo : string) {}',
            errors: [
                {
                    message: 'There must be no space before "foo" parameter type annotation colon.'
                }
            ]
        },
        {
            code: 'function x(foo: string) {}',
            errors: [
                {
                    message: 'There must be a space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: 'var x = function (foo : string) {}',
            errors: [
                {
                    message: 'There must be no space before "foo" parameter type annotation colon.'
                }
            ]
        },
        {
            code: 'var x = function (foo: string) {}',
            errors: [
                {
                    message: 'There must be a space before "foo" parameter type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: 'class Foo { constructor(foo : string ) {} }',
            errors: [
                {
                    message: 'There must be no space before "foo" parameter type annotation colon.'
                }
            ]
        },
        {
            code: 'class Foo { constructor(foo: string ) {} }',
            errors: [
                {
                    message: 'There must be a space before "foo" parameter type annotation colon.'
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
                    message: 'There must be a space before "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type X = { name:string }',
            errors: [
                {
                    message: 'There must be a space before "name" object type annotation colon.'
                }
            ],
            options: [
                'always'
            ]
        },
        {
            code: 'type X = { bar  :string }',
            errors: [
                {
                    message: 'There must be 1 space before "bar" object type annotation colon.'
                }
            ]
        },
        {
            code: 'const D: { name:string[] } = {}',
            errors: [
                {
                    message: 'There must be a space before "name" object type annotation colon.'
                }
            ]
        },
        {
            code: 'type Q = { name :string }',
            errors: [
                {
                    message: 'There must be no spaces before "name" object type annotation colon.'
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
            code: '(foo?: string) => {}'
        },
        {
            code: '(foo: string) => {}',
            options: [
                'never'
            ]
        },
        {
            code: '(foo : string) => {}',
            options: [
                'always'
            ]
        },
        {
            code: '(foo ?: string) => {}',
            options: [
                'always'
            ]
        },
        {
            code: 'function x(foo: string) {}'
        },
        {
            code: 'function x(foo : string) {}',
            options: [
                'always'
            ]
        },
        {
            code: 'var x = function (foo: string) {}'
        },
        {
            code: 'var x = function (foo : string) {}',
            options: [
                'always'
            ]
        },
        {
            code: 'class Foo { constructor(foo: string ) {} }'
        },
        {
            code: 'class Foo { constructor(foo : string ) {} }',
            options: [
                'always'
            ]
        },
        {
            code: 'type X = { name :string }'
        },
        {
            code: 'type X = { name :string }',
            options: [
                'always'
            ]
        },
        {
            code: 'const D : { name :string[] } = {}'
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
