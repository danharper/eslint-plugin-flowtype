import _ from 'lodash';
import {
    getParameterName,
    iterateFunctionNodes
} from './../utilities';

const functionEvaluators = iterateFunctionNodes((context) => {
    const always = context.options[0] === 'always';

    const sourceCode = context.getSourceCode();

    return (functionNode) => {
        _.forEach(functionNode.params, (identifierNode) => {
            const parameterName = getParameterName(identifierNode, context);
            const typeAnnotation = _.get(identifierNode, 'typeAnnotation') || _.get(identifierNode, 'left.typeAnnotation');

            if (typeAnnotation) {
                const spaceBefore = typeAnnotation.start - sourceCode.getFirstToken(identifierNode, 0).end - (identifierNode.optional ? 1 : 0);

                if (always && spaceBefore > 1) {
                    context.report(identifierNode, 'There must be 1 space before "' + parameterName + '" parameter type annotation colon.');
                } else if (always && spaceBefore === 0) {
                    context.report(identifierNode, 'There must be a space before "' + parameterName + '" parameter type annotation colon.');
                } else if (!always && spaceBefore > 0) {
                    context.report(identifierNode, 'There must be no space before "' + parameterName + '" parameter type annotation colon.');
                }
            }
        });
    };
});

const objectTypeEvaluator = (context) => {
    const always = (context.options[0] || 'always') === 'always';

    const sourceCode = context.getSourceCode();

    return (objectTypeProperty) => {
        const identifier = sourceCode.getFirstToken(objectTypeProperty, 0);
        const name = identifier.value;
        const isOptional = objectTypeProperty.optional;
        const colon = sourceCode.getFirstToken(objectTypeProperty, isOptional ? 2 : 1);

        const spaceBefore = colon.start - identifier.end - (isOptional ? 1 : 0);

        if (always && spaceBefore > 1) {
            context.report(objectTypeProperty, 'There must be 1 space before "' + name + '" object type annotation colon.');
        } else if (always && spaceBefore === 0) {
            context.report(objectTypeProperty, 'There must be a space before "' + name + '" object type annotation colon.');
        } else if (!always && spaceBefore > 0) {
            context.report(objectTypeProperty, 'There must be no spaces before "' + name + '" object type annotation colon.');
        }
    };
};

export default (context) => {
    return {
        ...functionEvaluators(context),
        ObjectTypeProperty: objectTypeEvaluator(context)
    };
};
