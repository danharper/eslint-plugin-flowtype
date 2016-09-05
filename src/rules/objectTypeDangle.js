export default (context) => {
  const always = (context.options[0] || 'always') === 'always';
  const sourceCode = context.getSourceCode();

  return {
    ObjectTypeProperty (node) {
      const lastToken = sourceCode.getLastToken(node);
      const isDangling = [';', ','].indexOf(lastToken.value) > -1;

      if (!isDangling && always) {
        context.report({
          fix: (fixer) => {
            return fixer.insertTextAfter(node, ',');
          },
          message: 'Must dangle',
          node
        });
      }

      if (isDangling && !always) {
        context.report({
          fix: (fixer) => {
            return fixer.replaceText(lastToken, '');
          },
          message: 'Must not dangle',
          node
        });
      }
    }
  };
};
