"use strict";(self.webpackChunkez_store=self.webpackChunkez_store||[]).push([[5376],{45376:function(a,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"TOML",fileTypes:["toml"],name:"toml",patterns:[{include:"#comments"},{include:"#groups"},{include:"#key_pair"},{include:"#invalid"}],repository:{comments:{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.toml"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.toml"}},end:"\\n",name:"comment.line.number-sign.toml"}]},groups:{patterns:[{captures:{1:{name:"punctuation.definition.section.begin.toml"},2:{patterns:[{match:"[^\\s.]+",name:"entity.name.section.toml"}]},3:{name:"punctuation.definition.section.begin.toml"}},match:"^\\s*(\\[)([^\\[\\]]*)(\\])",name:"meta.group.toml"},{captures:{1:{name:"punctuation.definition.section.begin.toml"},2:{patterns:[{match:"[^\\s.]+",name:"entity.name.section.toml"}]},3:{name:"punctuation.definition.section.begin.toml"}},match:"^\\s*(\\[\\[)([^\\[\\]]*)(\\]\\])",name:"meta.group.double.toml"}]},invalid:{match:"\\S+(\\s*(?=\\S))?",name:"invalid.illegal.not-allowed-here.toml"},key_pair:{patterns:[{begin:"([A-Za-z0-9_-]+)\\s*(=)\\s*",captures:{1:{name:"variable.other.key.toml"},2:{name:"punctuation.separator.key-value.toml"}},end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]},{begin:'((")(.*?)("))\\s*(=)\\s*',captures:{1:{name:"variable.other.key.toml"},2:{name:"punctuation.definition.variable.begin.toml"},3:{patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\]',name:"invalid.illegal.escape.toml"},{match:'"',name:"invalid.illegal.not-allowed-here.toml"}]},4:{name:"punctuation.definition.variable.end.toml"},5:{name:"punctuation.separator.key-value.toml"}},end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]},{begin:"((')([^']*)('))\\s*(=)\\s*",captures:{1:{name:"variable.other.key.toml"},2:{name:"punctuation.definition.variable.begin.toml"},4:{name:"punctuation.definition.variable.end.toml"},5:{name:"punctuation.separator.key-value.toml"}},end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]},{begin:`(?x)
(
(
(?:
[A-Za-z0-9_-]+
| "  (?:[^"\\\\]|\\\\.)* "
| ' [^']*          '
)
(?:
\\s* \\. \\s*
| (?= \\s* =)
)
){2,}
)
\\s*(=)\\s*
`,captures:{1:{name:"variable.other.key.toml",patterns:[{match:"\\.",name:"punctuation.separator.variable.toml"},{captures:{1:{name:"punctuation.definition.variable.begin.toml"},2:{patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\]',name:"invalid.illegal.escape.toml"}]},3:{name:"punctuation.definition.variable.end.toml"}},match:'(")((?:[^"\\\\]|\\\\.)*)(")'},{captures:{1:{name:"punctuation.definition.variable.begin.toml"},2:{name:"punctuation.definition.variable.end.toml"}},match:"(')[^']*(')"}]},3:{name:"punctuation.separator.key-value.toml"}},comment:"Dotted key",end:"(?<=\\S)(?<!=)|$",patterns:[{include:"#primatives"}]}]},primatives:{patterns:[{begin:'\\G"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:'"{3,5}',endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.triple.double.toml",patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\\\n]',name:"invalid.illegal.escape.toml"}]},{begin:'\\G"',beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.double.toml",patterns:[{match:'\\\\([btnfr"\\\\]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.toml"},{match:'\\\\[^btnfr"\\\\]',name:"invalid.illegal.escape.toml"}]},{begin:"\\G'''",beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:"'{3,5}",endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.triple.single.toml"},{begin:"\\G'",beginCaptures:{0:{name:"punctuation.definition.string.begin.toml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.toml"}},name:"string.quoted.single.toml"},{match:`\\G(?x)
[0-9]{4}
-
(0[1-9]|1[012])
-
(?!00|3[2-9])[0-3][0-9]
(
[Tt ]
(?!2[5-9])[0-2][0-9]
:
[0-5][0-9]
:
(?!6[1-9])[0-6][0-9]
(\\.[0-9]+)?
(
Z
| [+-](?!2[5-9])[0-2][0-9]:[0-5][0-9]
)?
)?
`,name:"constant.other.date.toml"},{match:`\\G(?x)
(?!2[5-9])[0-2][0-9]
:
[0-5][0-9]
:
(?!6[1-9])[0-6][0-9]
(\\.[0-9]+)?
`,name:"constant.other.time.toml"},{match:"\\G(true|false)",name:"constant.language.boolean.toml"},{match:"\\G0x\\h(\\h|_\\h)*",name:"constant.numeric.hex.toml"},{match:"\\G0o[0-7]([0-7]|_[0-7])*",name:"constant.numeric.octal.toml"},{match:"\\G0b[01]([01]|_[01])*",name:"constant.numeric.binary.toml"},{match:"\\G[+-]?(inf|nan)",name:"constant.numeric.toml"},{match:`(?x)
\\G
(
[+-]?
(
0
| ([1-9](([0-9]|_[0-9])+)?)
)
)
(?=[.eE])
(
\\.
([0-9](([0-9]|_[0-9])+)?)
)?
(
[eE]
([+-]?[0-9](([0-9]|_[0-9])+)?)
)?
`,name:"constant.numeric.float.toml"},{match:`(?x)
\\G
(
[+-]?
(
0
| ([1-9](([0-9]|_[0-9])+)?)
)
)
`,name:"constant.numeric.integer.toml"},{begin:"\\G\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.toml"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.toml"}},name:"meta.array.toml",patterns:[{begin:`(?=["'']|[+-]?[0-9]|[+-]?(inf|nan)|true|false|\\[|\\{)`,end:",|(?=])",endCaptures:{0:{name:"punctuation.separator.array.toml"}},patterns:[{include:"#primatives"},{include:"#comments"},{include:"#invalid"}]},{include:"#comments"},{include:"#invalid"}]},{begin:"\\G\\{",beginCaptures:{0:{name:"punctuation.definition.inline-table.begin.toml"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.inline-table.end.toml"}},name:"meta.inline-table.toml",patterns:[{begin:"(?=\\S)",end:",|(?=})",endCaptures:{0:{name:"punctuation.separator.inline-table.toml"}},patterns:[{include:"#key_pair"}]},{include:"#comments"}]}]}},scopeName:"source.toml"})]}}]);
