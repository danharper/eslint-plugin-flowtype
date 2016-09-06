import _ from 'lodash';

export default (context) => {
  const option = context.options[0] || 'always';
  const sourceCode = context.getSourceCode();

  return {
    ObjectTypeAnnotation (node) {
      const lastProperty = _.last(node.properties);

      const lastTokenOfProperty = sourceCode.getLastToken(lastProperty);
      const lastTokenOfObject = sourceCode.getLastToken(node);

      const isMultiLine = lastTokenOfProperty.loc.start.line !== lastTokenOfObject.loc.start.line;
      const isDangling = [';', ','].indexOf(lastTokenOfProperty.value) > -1;

      const reportDangle = () => {
        context.report({
          fix: (fixer) => {
            return fixer.replaceText(lastTokenOfProperty, '');
          },
          message: 'Must not dangle',
          node: lastProperty
        });
      };

      const reportNoDangle = () => {
        context.report({
          fix: (fixer) => {
            return fixer.insertTextAfter(lastProperty, ',');
          },
          message: 'Must dangle',
          node: lastProperty
        });
      };

      if (option === 'always' && !isDangling) {
        reportNoDangle();
      }

      if (option === 'never' && isDangling) {
        reportDangle();
      }

      if (option === 'always-multiline' && !isDangling && isMultiLine) {
        reportNoDangle();
      }

      if (option === 'always-multiline' && isDangling && !isMultiLine) {
        reportDangle();
      }

      if (option === 'only-multiline' && isDangling && !isMultiLine) {
        reportDangle();
      }
    },

    TupleTypeAnnotation (node) {
      const lastType = _.last(node.types);

      const [penultimateToken, lastToken] = sourceCode.getLastTokens(node, 2);

      const isMultiLine = penultimateToken.loc.start.line !== lastToken.loc.start.line;
      const isDangling = penultimateToken.value === ',';

      const reportDangle = () => {
        context.report({
          fix: (fixer) => {
            return fixer.replaceText(penultimateToken, '');
          },
          message: 'Must not dangle',
          node: lastType
        });
      };

      const reportNoDangle = () => {
        context.report({
          fix: (fixer) => {
            return fixer.insertTextAfter(penultimateToken, ',');
          },
          message: 'Must dangle',
          node: lastType
        });
      };

      if (option === 'always' && !isDangling) {
        reportNoDangle();
      }

      if (option === 'never' && isDangling) {
        reportDangle();
      }

      if (option === 'always-multiline' && !isDangling && isMultiLine) {
        reportNoDangle();
      }

      if (option === 'always-multiline' && isDangling && !isMultiLine) {
        reportDangle();
      }

      if (option === 'only-multiline' && isDangling && !isMultiLine) {
        reportDangle();
      }
    }
  };
};
