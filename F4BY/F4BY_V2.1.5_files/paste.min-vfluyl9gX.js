define(["require","exports","tslib","tslib","comments2/components/comment_editor/core/class_decorators","comments2/components/comment_editor/layers/scaffold","comments2/components/comment_editor/core/types","draft-js","comments2/components/comment_editor/draft_utils"],function(e,t,o,n,r,a,s,i,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n);var m=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.handlePaste=function(e){var t=e.innerProps.value,o=t.getCurrentContent(),n=t.getSelection(),r=c.htmlToFragment({html:e.innerProps.evt.html,contentState:o,editorKey:e.status.draft.editorKey,elementMappers:[c.paperEmojiMapper]});return c.replaceContent(t,i.Modifier.replaceWithFragment(o,n,r))},t})(s.BaseLayer);t.PasteLayer=m,n.__decorate([r.plug(a.into.draft.on.pasteHTML.update.editorState)],m.prototype,"handlePaste",null)});
//# sourceMappingURL=paste.min.js-vfla562pG.map