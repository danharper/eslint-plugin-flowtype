import _ from 'lodash';
import {
    getParameterName,
    iterateFunctionNodes
} from './../utilities';

const functionEvaluators = iterateFunctionNodes((context) => {
    const always = (context.options[0] || 'always') === 'always';

    const sourceCode = context.getSourceCode();

    return (functionNode) => {
        _.forEach(functionNode.params, (identifierNode) => {
            const parameterName = getParameterName(identifierNode, context);
            const typeAnnotation = _.get(identifierNode, 'typeAnnotation') || _.get(identifierNode, 'left.typeAnnotation');

            if (typeAnnotation) {
                const token = sourceCode.getFirstToken(typeAnnotation, 1);
                const spaceAfter = token.start - typeAnnotation.start - 1;

                if (always && spaceAfter > 1) {
                    context.report(identifierNode, 'There must be 1 space after "' + parameterName + '" parameter type annotation colon.');
                } else if (always && spaceAfter === 0) {
                    context.report(identifierNode, 'There must be a space after "' + parameterName + '" parameter type annotation colon.');
                } else if (!always && spaceAfter > 0) {
                    context.report(identifierNode, 'There must be no space after "' + parameterName + '" parameter type annotation colon.');
                }
            }
        });

        if (functionNode.returnType) {
            const token = sourceCode.getFirstToken(functionNode.returnType, 1);
            const spaceAfter = token.start - functionNode.returnType.start - 1;

            if (always && spaceAfter > 1) {
                context.report(functionNode, 'There must be 1 space after return type colon.');
            } else if (always && spaceAfter === 0) {
                context.report(functionNode, 'There must be a space after return type colon.');
            } else if (!always && spaceAfter > 0) {
                context.report(functionNode, 'There must be no space after return type colon.');
            }
        }
    };
});

const objectTypeEvaluator = (context) => {
    const always = (context.options[0] || 'always') === 'always';

    const sourceCode = context.getSourceCode();

    return (objectTypeProperty) => {
        const name = sourceCode.getFirstToken(objectTypeProperty, 0).value;
        const colon = sourceCode.getFirstToken(objectTypeProperty, 1);

        const spaceAfter = objectTypeProperty.value.start - colon.end - (objectTypeProperty.optional ? 1 : 0);

        if (always && spaceAfter > 1) {
            context.report(objectTypeProperty, 'There must be 1 space after "' + name + '" object type annotation colon.');
        } else if (always && spaceAfter === 0) {
            context.report(objectTypeProperty, 'There must be a space after "' + name + '" object type annotation colon.');
        } else if (!always && spaceAfter > 0) {
            context.report(objectTypeProperty, 'There must be no spaces after "' + name + '" object type annotation colon.');
        }
    };
};

export default (context) => {
    return {
        ...functionEvaluators(context),
        ObjectTypeProperty: objectTypeEvaluator(context)
    };
};
