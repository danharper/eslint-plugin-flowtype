import _ from 'lodash';

export default (context) => {
  const option = context.options[0] || 'never';
  const sourceCode = context.getSourceCode();

  const makeReporters = (node, tokenToFix) => {
    const reportDangle = () => {
      context.report({
        fix: (fixer) => {
          return fixer.replaceText(tokenToFix, '');
        },
        message: 'Must not dangle',
        node
      });
    };

    const reportNoDangle = () => {
      context.report({
        fix: (fixer) => {
          return fixer.insertTextAfter(tokenToFix, ',');
        },
        message: 'Must dangle',
        node
      });
    };

    return {
      dangle: reportDangle,
      noDangle: reportNoDangle
    };
  };

  const evaluate = (node, tokenToFix) => {
    const [penultimateToken, lastToken] = sourceCode.getLastTokens(node, 2);

    const isDangling = [';', ','].indexOf(penultimateToken.value) > -1;
    const isMultiLine = penultimateToken.loc.start.line !== lastToken.loc.start.line;

    const report = makeReporters(tokenToFix, penultimateToken);

    if (option === 'always' && !isDangling) {
      report.noDangle();
    }

    if (option === 'never' && isDangling) {
      report.dangle();
    }

    if (option === 'always-multiline' && !isDangling && isMultiLine) {
      report.noDangle();
    }

    if (option === 'always-multiline' && isDangling && !isMultiLine) {
      report.dangle();
    }

    if (option === 'only-multiline' && isDangling && !isMultiLine) {
      report.dangle();
    }
  };

  return {
    ObjectTypeAnnotation (node) {
      evaluate(node, _.last(node.properties));
    },

    TupleTypeAnnotation (node) {
      evaluate(node, _.last(node.types));
    }
  };
};
