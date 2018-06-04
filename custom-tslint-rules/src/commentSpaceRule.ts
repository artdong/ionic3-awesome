import * as Lint from 'tslint';
import * as utils from 'tsutils';
import * as ts from 'typescript';

const RULE_NAME = 'comment-space';

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = 'comment must start with a space';

  public static metadata: Lint.IRuleMetadata = {
    ruleName: RULE_NAME,
    hasFix: false,
    description: 'comment must start with a space',
    rationale: '',
    optionsDescription: '',
    options: {},
    optionExamples: [Lint.Utils.dedent`
      "${RULE_NAME}": true
      `],
    typescriptOnly: false,
    type: 'style'
  };

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk);
  }
}

function walk(ctx: Lint.WalkContext<void>) {
  utils.forEachComment(ctx.sourceFile, (fullText, {kind, pos, end}) => {
    let start = pos + 2;
    if (kind !== ts.SyntaxKind.SingleLineCommentTrivia ||
      // exclude empty comments
      start === end ||
      // exclude /// <reference path="...">
      fullText[start] === '/' && ctx.sourceFile.referencedFiles.some((ref) => ref.pos >= pos && ref.end <= end)) {
      return;
    }
    // skip all leading slashes
    while (fullText[start] === '/') {
      ++start;
    }
    if (start === end) {
      return;
    }
    const commentText = fullText.slice(start, end);
    // whitelist //#region and //#endregion and JetBrains IDEs' "//noinspection ..."
    if (/^(?:#(?:end)?region|noinspection\s)/.test(commentText)) {
      return;
    }

    if (commentText[0] !== ' ') {
      let fix = [Lint.Replacement.appendText(start, ' ')];
      ctx.addFailure(start, end, Rule.FAILURE_STRING, fix);
    }

  });
}
