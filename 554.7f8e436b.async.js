"use strict";(self.webpackChunkez_store=self.webpackChunkez_store||[]).push([[554],{90554:function(a,e,n){n.r(e),n.d(e,{default:function(){return t}});var t=[Object.freeze({displayName:"PowerShell",name:"powershell",patterns:[{begin:"<#",beginCaptures:{0:{name:"punctuation.definition.comment.block.begin.powershell"}},end:"#>",endCaptures:{0:{name:"punctuation.definition.comment.block.end.powershell"}},name:"comment.block.powershell",patterns:[{include:"#commentEmbeddedDocs"}]},{match:"[2-6]>&1|>>|>|<<|<|>|>\\||[1-6]>|[1-6]>>",name:"keyword.operator.redirection.powershell"},{include:"#commands"},{include:"#commentLine"},{include:"#variable"},{include:"#subexpression"},{include:"#function"},{include:"#attribute"},{include:"#UsingDirective"},{include:"#type"},{include:"#hashtable"},{include:"#doubleQuotedString"},{include:"#scriptblock"},{comment:"Needed to parse stuff correctly in 'argument mode'. (See about_parsing.)",include:"#doubleQuotedStringEscapes"},{applyEndPatternLast:!0,begin:"['\\x{2018}-\\x{201B}]",beginCaptures:{0:{name:"punctuation.definition.string.begin.powershell"}},end:"['\\x{2018}-\\x{201B}]",endCaptures:{0:{name:"punctuation.definition.string.end.powershell"}},name:"string.quoted.single.powershell",patterns:[{match:"['\\x{2018}-\\x{201B}]{2}",name:"constant.character.escape.powershell"}]},{begin:'(@["\\x{201C}-\\x{201E}])\\s*$',beginCaptures:{1:{name:"punctuation.definition.string.begin.powershell"}},end:'^["\\x{201C}-\\x{201E}]@',endCaptures:{0:{name:"punctuation.definition.string.end.powershell"}},name:"string.quoted.double.heredoc.powershell",patterns:[{include:"#variableNoProperty"},{include:"#doubleQuotedStringEscapes"},{include:"#interpolation"}]},{begin:"(@['\\x{2018}-\\x{201B}])\\s*$",beginCaptures:{1:{name:"punctuation.definition.string.begin.powershell"}},end:"^['\\x{2018}-\\x{201B}]@",endCaptures:{0:{name:"punctuation.definition.string.end.powershell"}},name:"string.quoted.single.heredoc.powershell"},{include:"#numericConstant"},{begin:"(@)(\\()",beginCaptures:{1:{name:"keyword.other.array.begin.powershell"},2:{name:"punctuation.section.group.begin.powershell"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.group.end.powershell"}},name:"meta.group.array-expression.powershell",patterns:[{include:"$self"}]},{begin:"((\\$))(\\()",beginCaptures:{1:{name:"keyword.other.substatement.powershell"},2:{name:"punctuation.definition.subexpression.powershell"},3:{name:"punctuation.section.group.begin.powershell"}},comment:"TODO: move to repo; make recursive.",end:"\\)",endCaptures:{0:{name:"punctuation.section.group.end.powershell"}},name:"meta.group.complex.subexpression.powershell",patterns:[{include:"$self"}]},{match:"(\\b(([A-Za-z0-9\\-_\\.]+)\\.(?i:exe|com|cmd|bat))\\b)",name:"support.function.powershell"},{match:"(?<!\\w|-|\\.)((?i:begin|break|catch|clean|continue|data|default|define|do|dynamicparam|else|elseif|end|exit|finally|for|from|if|in|inlinescript|parallel|param|process|return|sequence|switch|throw|trap|try|until|var|while)|%|\\?)(?!\\w)",name:"keyword.control.powershell"},{match:"(?<!\\w|-|[^\\)]\\.)((?i:(foreach|where)(?!-object))|%|\\?)(?!\\w)",name:"keyword.control.powershell"},{begin:"(?<!\\w)(--%)(?!\\w)",beginCaptures:{1:{name:"keyword.control.powershell"}},comment:"This should be moved to the repository at some point.",end:"$",patterns:[{match:".+",name:"string.unquoted.powershell"}]},{comment:"This should only be relevant inside a class but will require a rework of how classes are matched. This is a temp fix.",match:"(?<!\\w)((?i:hidden|static))(?!\\w)",name:"storage.modifier.powershell"},{captures:{1:{name:"storage.type.powershell"},2:{name:"entity.name.function"}},comment:"capture should be entity.name.type, but it doesn't provide a good color in the default schema.",match:"(?<!\\w|-)((?i:class)|%|\\?)(?:\\s)+((?:\\p{L}|\\d|_|-|)+)\\b"},{match:"(?<!\\w)-(?i:is(?:not)?|as)\\b",name:"keyword.operator.comparison.powershell"},{match:"(?<!\\w)-(?i:[ic]?(?:eq|ne|[gl][te]|(?:not)?(?:like|match|contains|in)|replace))(?!\\p{L})",name:"keyword.operator.comparison.powershell"},{match:"(?<!\\w)-(?i:join|split)(?!\\p{L})|!",name:"keyword.operator.unary.powershell"},{match:"(?<!\\w)-(?i:and|or|not|xor)(?!\\p{L})|!",name:"keyword.operator.logical.powershell"},{match:"(?<!\\w)-(?i:band|bor|bnot|bxor|shl|shr)(?!\\p{L})",name:"keyword.operator.bitwise.powershell"},{match:"(?<!\\w)-(?i:f)(?!\\p{L})",name:"keyword.operator.string-format.powershell"},{match:"[+%*/-]?=|[+/*%-]",name:"keyword.operator.assignment.powershell"},{match:"\\|{2}|&{2}|;",name:"punctuation.terminator.statement.powershell"},{match:"&|(?<!\\w)\\.(?= )|`|,|\\|",name:"keyword.operator.other.powershell"},{comment:"This is very imprecise, is there a syntax for 'must come after...' ",match:"(?<!\\s|^)\\.\\.(?=\\-?\\d|\\(|\\$)",name:"keyword.operator.range.powershell"}],repository:{RequiresDirective:{begin:"(?<=#)(?i:(requires))\\s",beginCaptures:{0:{name:"keyword.control.requires.powershell"}},end:"$",name:"meta.requires.powershell",patterns:[{match:"\\-(?i:Modules|PSSnapin|RunAsAdministrator|ShellId|Version|Assembly|PSEdition)",name:"keyword.other.powershell"},{match:"(?<!-)\\b\\p{L}+|\\d+(?:\\.\\d+)*",name:"variable.parameter.powershell"},{include:"#hashtable"}]},UsingDirective:{captures:{1:{name:"keyword.control.using.powershell"},2:{name:"keyword.other.powershell"},3:{name:"variable.parameter.powershell"}},match:"(?<!\\w)(?i:(using))\\s+(?i:(namespace|module))\\s+(?i:((?:\\w+(?:\\.)?)+))"},attribute:{begin:"(\\[)\\s*\\b(?i)(cmdletbinding|alias|outputtype|parameter|validatenotnull|validatenotnullorempty|validatecount|validateset|allownull|allowemptycollection|allowemptystring|validatescript|validaterange|validatepattern|validatelength|supportswildcards)\\b",beginCaptures:{1:{name:"punctuation.section.bracket.begin.powershell"},2:{name:"support.function.attribute.powershell"}},end:"(\\])",endCaptures:{1:{name:"punctuation.section.bracket.end.powershell"}},name:"meta.attribute.powershell",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.group.begin.powershell"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.group.end.powershell"}},patterns:[{include:"$self"},{captures:{1:{name:"variable.parameter.attribute.powershell"},2:{name:"keyword.operator.assignment.powershell"}},match:"(?i)\\b(mandatory|valuefrompipeline|valuefrompipelinebypropertyname|valuefromremainingarguments|position|parametersetname|defaultparametersetname|supportsshouldprocess|supportspaging|positionalbinding|helpuri|confirmimpact|helpmessage)\\b(?:\\s+)?(=)?"}]}]},commands:{patterns:[{comment:"Verb-Noun pattern:",match:"(?:(\\p{L}|\\d|_|-|\\\\|\\:)*\\\\)?\\b(?i:Add|Approve|Assert|Backup|Block|Build|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Deploy|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Mount|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Write)\\-.+?(?:\\.(?i:exe|cmd|bat|ps1))?\\b",name:"support.function.powershell"},{comment:"Builtin cmdlets with reserved verbs",match:"(?<!\\w)(?i:foreach-object)(?!\\w)",name:"support.function.powershell"},{comment:"Builtin cmdlets with reserved verbs",match:"(?<!\\w)(?i:where-object)(?!\\w)",name:"support.function.powershell"},{comment:"Builtin cmdlets with reserved verbs",match:"(?<!\\w)(?i:sort-object)(?!\\w)",name:"support.function.powershell"},{comment:"Builtin cmdlets with reserved verbs",match:"(?<!\\w)(?i:tee-object)(?!\\w)",name:"support.function.powershell"}]},commentEmbeddedDocs:{patterns:[{captures:{1:{name:"constant.string.documentation.powershell"},2:{name:"keyword.operator.documentation.powershell"}},comment:"these embedded doc keywords do not support arguments, must be the only thing on the line",match:"(?:^|\\G)(?i:\\s*(\\.)(COMPONENT|DESCRIPTION|EXAMPLE|FUNCTIONALITY|INPUTS|LINK|NOTES|OUTPUTS|ROLE|SYNOPSIS))\\s*$",name:"comment.documentation.embedded.powershell"},{captures:{1:{name:"constant.string.documentation.powershell"},2:{name:"keyword.operator.documentation.powershell"},3:{name:"keyword.operator.documentation.powershell"}},comment:"these embedded doc keywords require arguments though the type required may be inconsistent, they may not all be able to use the same argument match",match:"(?:^|\\G)(?i:\\s*(\\.)(EXTERNALHELP|FORWARDHELP(?:CATEGORY|TARGETNAME)|PARAMETER|REMOTEHELPRUNSPACE))\\s+(.+?)\\s*$",name:"comment.documentation.embedded.powershell"}]},commentLine:{begin:"(?<![`\\\\-])(#)#*",captures:{1:{name:"punctuation.definition.comment.powershell"}},end:"$\\n?",name:"comment.line.powershell",patterns:[{include:"#commentEmbeddedDocs"},{include:"#RequiresDirective"}]},doubleQuotedString:{applyEndPatternLast:!0,begin:'["\\x{201C}-\\x{201E}]',beginCaptures:{0:{name:"punctuation.definition.string.begin.powershell"}},end:'["\\x{201C}-\\x{201E}]',endCaptures:{0:{name:"punctuation.definition.string.end.powershell"}},name:"string.quoted.double.powershell",patterns:[{match:"(?i)\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,64}\\b"},{include:"#variableNoProperty"},{include:"#doubleQuotedStringEscapes"},{match:'["\\x{201C}-\\x{201E}]{2}',name:"constant.character.escape.powershell"},{include:"#interpolation"},{match:"`\\s*$",name:"keyword.other.powershell"}]},doubleQuotedStringEscapes:{patterns:[{match:"`[`0abefnrtv'\"\\x{2018}-\\x{201E}$]",name:"constant.character.escape.powershell"},{include:"#unicodeEscape"}]},function:{begin:"^(?:\\s*+)(?i)(function|filter|configuration|workflow)\\s+(?:(global|local|script|private):)?((?:\\p{L}|\\d|_|-|\\.)+)",beginCaptures:{0:{name:"meta.function.powershell"},1:{name:"storage.type.powershell"},2:{name:"storage.modifier.scope.powershell"},3:{name:"entity.name.function.powershell"}},end:"(?=\\{|\\()",patterns:[{include:"#commentLine"}]},hashtable:{begin:"(@)(\\{)",beginCaptures:{1:{name:"keyword.other.hashtable.begin.powershell"},2:{name:"punctuation.section.braces.begin.powershell"}},end:"(\\})",endCaptures:{1:{name:"punctuation.section.braces.end.powershell"}},name:"meta.hashtable.powershell",patterns:[{captures:{1:{name:"punctuation.definition.string.begin.powershell"},2:{name:"variable.other.readwrite.powershell"},3:{name:"punctuation.definition.string.end.powershell"},4:{name:"keyword.operator.assignment.powershell"}},match:`\\b((?:\\'|\\")?)(\\w+)((?:\\'|\\")?)(?:\\s+)?(=)(?:\\s+)?`,name:"meta.hashtable.assignment.powershell"},{include:"#scriptblock"},{include:"$self"}]},interpolation:{begin:"(((\\$)))((\\())",beginCaptures:{1:{name:"keyword.other.substatement.powershell"},2:{name:"punctuation.definition.substatement.powershell"},3:{name:"punctuation.section.embedded.substatement.begin.powershell"},4:{name:"punctuation.section.group.begin.powershell"},5:{name:"punctuation.section.embedded.substatement.begin.powershell"}},contentName:"interpolated.complex.source.powershell",end:"(\\))",endCaptures:{0:{name:"punctuation.section.group.end.powershell"},1:{name:"punctuation.section.embedded.substatement.end.powershell"}},name:"meta.embedded.substatement.powershell",patterns:[{include:"$self"}]},numericConstant:{patterns:[{captures:{1:{name:"constant.numeric.hex.powershell"},2:{name:"keyword.other.powershell"}},match:"(?<!\\w)([-+]?0(?:x|X)[0-9a-fA-F_]+(?:U|u|L|l|UL|Ul|uL|ul|LU|Lu|lU|lu)?)((?i:[kmgtp]b)?)\\b"},{captures:{1:{name:"constant.numeric.integer.powershell"},2:{name:"keyword.other.powershell"}},match:"(?<!\\w)([-+]?(?:[0-9_]+)?\\.[0-9_]+(?:(?:e|E)[0-9]+)?(?:F|f|D|d|M|m)?)((?i:[kmgtp]b)?)\\b"},{captures:{1:{name:"constant.numeric.octal.powershell"},2:{name:"keyword.other.powershell"}},match:"(?<!\\w)([-+]?0(?:b|B)[01_]+(?:U|u|L|l|UL|Ul|uL|ul|LU|Lu|lU|lu)?)((?i:[kmgtp]b)?)\\b"},{captures:{1:{name:"constant.numeric.integer.powershell"},2:{name:"keyword.other.powershell"}},match:"(?<!\\w)([-+]?[0-9_]+(?:e|E)(?:[0-9_])?+(?:F|f|D|d|M|m)?)((?i:[kmgtp]b)?)\\b"},{captures:{1:{name:"constant.numeric.integer.powershell"},2:{name:"keyword.other.powershell"}},match:"(?<!\\w)([-+]?[0-9_]+\\.(?:e|E)(?:[0-9_])?+(?:F|f|D|d|M|m)?)((?i:[kmgtp]b)?)\\b"},{captures:{1:{name:"constant.numeric.integer.powershell"},2:{name:"keyword.other.powershell"}},match:"(?<!\\w)([-+]?[0-9_]+[\\.]?(?:F|f|D|d|M|m))((?i:[kmgtp]b)?)\\b"},{captures:{1:{name:"constant.numeric.integer.powershell"},2:{name:"keyword.other.powershell"}},match:"(?<!\\w)([-+]?[0-9_]+[\\.]?(?:U|u|L|l|UL|Ul|uL|ul|LU|Lu|lU|lu)?)((?i:[kmgtp]b)?)\\b"}]},scriptblock:{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.braces.begin.powershell"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.braces.end.powershell"}},name:"meta.scriptblock.powershell",patterns:[{include:"$self"}]},subexpression:{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.group.begin.powershell"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.group.end.powershell"}},name:"meta.group.simple.subexpression.powershell",patterns:[{include:"$self"}]},type:{begin:"\\[",beginCaptures:{0:{name:"punctuation.section.bracket.begin.powershell"}},end:"\\]",endCaptures:{0:{name:"punctuation.section.bracket.end.powershell"}},patterns:[{match:"(?!\\d+|\\.)(?:\\p{L}|\\p{N}|\\.)+",name:"storage.type.powershell"},{include:"$self"}]},unicodeEscape:{comment:"`u{xxxx} added in PowerShell 6.0",patterns:[{match:"`u\\{(?:(?:10)?([0-9a-fA-F]){1,4}|0?\\g<1>{1,5})}",name:"constant.character.escape.powershell"},{match:"`u(?:\\{[0-9a-fA-F]{,6}.)?",name:"invalid.character.escape.powershell"}]},variable:{patterns:[{captures:{0:{name:"constant.language.powershell"},1:{name:"punctuation.definition.variable.powershell"}},comment:"These are special constants.",match:"(\\$)(?i:(False|Null|True))\\b"},{captures:{0:{name:"support.constant.variable.powershell"},1:{name:"punctuation.definition.variable.powershell"},3:{name:"variable.other.member.powershell"}},comment:"These are the other built-in constants.",match:"(\\$)(?i:(Error|ExecutionContext|Host|Home|PID|PsHome|PsVersionTable|ShellID))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?\\b"},{captures:{0:{name:"support.variable.automatic.powershell"},1:{name:"punctuation.definition.variable.powershell"},3:{name:"variable.other.member.powershell"}},comment:"Automatic variables are not constants, but they are read-only. In monokai (default) color schema support.variable doesn't have color, so we use constant.",match:"(\\$)((?:[$^?])|(?i:_|Args|ConsoleFileName|Event|EventArgs|EventSubscriber|ForEach|Input|LastExitCode|Matches|MyInvocation|NestedPromptLevel|Profile|PSBoundParameters|PsCmdlet|PsCulture|PSDebugContext|PSItem|PSCommandPath|PSScriptRoot|PsUICulture|Pwd|Sender|SourceArgs|SourceEventArgs|StackTrace|Switch|This)\\b)((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?"},{captures:{0:{name:"variable.language.powershell"},1:{name:"punctuation.definition.variable.powershell"},3:{name:"variable.other.member.powershell"}},comment:"Style preference variables as language variables so that they stand out.",match:"(\\$)(?i:(ConfirmPreference|DebugPreference|ErrorActionPreference|ErrorView|FormatEnumerationLimit|InformationPreference|LogCommandHealthEvent|LogCommandLifecycleEvent|LogEngineHealthEvent|LogEngineLifecycleEvent|LogProviderHealthEvent|LogProviderLifecycleEvent|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount|MaximumHistoryCount|MaximumVariableCount|OFS|OutputEncoding|PSCulture|PSDebugContext|PSDefaultParameterValues|PSEmailServer|PSItem|PSModuleAutoLoadingPreference|PSModuleAutoloadingPreference|PSSenderInfo|PSSessionApplicationName|PSSessionConfigurationName|PSSessionOption|ProgressPreference|VerbosePreference|WarningPreference|WhatIfPreference))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?\\b"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"storage.modifier.scope.powershell"},4:{name:"variable.other.member.powershell"}},match:"(?i:(\\$|@)(global|local|private|script|using|workflow):((?:\\p{L}|\\d|_)+))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"punctuation.section.braces.begin.powershell"},3:{name:"storage.modifier.scope.powershell"},5:{name:"punctuation.section.braces.end.powershell"},6:{name:"variable.other.member.powershell"}},match:"(?i:(\\$)(\\{)(global|local|private|script|using|workflow):([^}]*[^}`])(\\}))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"support.variable.drive.powershell"},4:{name:"variable.other.member.powershell"}},match:"(?i:(\\$|@)((?:\\p{L}|\\d|_)+:)?((?:\\p{L}|\\d|_)+))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"punctuation.section.braces.begin.powershell"},3:{name:"support.variable.drive.powershell"},5:{name:"punctuation.section.braces.end.powershell"},6:{name:"variable.other.member.powershell"}},match:"(?i:(\\$)(\\{)((?:\\p{L}|\\d|_)+:)?([^}]*[^}`])(\\}))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?"}]},variableNoProperty:{patterns:[{captures:{0:{name:"constant.language.powershell"},1:{name:"punctuation.definition.variable.powershell"}},comment:"These are special constants.",match:"(\\$)(?i:(False|Null|True))\\b"},{captures:{0:{name:"support.constant.variable.powershell"},1:{name:"punctuation.definition.variable.powershell"},3:{name:"variable.other.member.powershell"}},comment:"These are the other built-in constants.",match:"(\\$)(?i:(Error|ExecutionContext|Host|Home|PID|PsHome|PsVersionTable|ShellID))\\b"},{captures:{0:{name:"support.variable.automatic.powershell"},1:{name:"punctuation.definition.variable.powershell"},3:{name:"variable.other.member.powershell"}},comment:"Automatic variables are not constants, but they are read-only...",match:"(\\$)((?:[$^?])|(?i:_|Args|ConsoleFileName|Event|EventArgs|EventSubscriber|ForEach|Input|LastExitCode|Matches|MyInvocation|NestedPromptLevel|Profile|PSBoundParameters|PsCmdlet|PsCulture|PSDebugContext|PSItem|PSCommandPath|PSScriptRoot|PsUICulture|Pwd|Sender|SourceArgs|SourceEventArgs|StackTrace|Switch|This)\\b)"},{captures:{0:{name:"variable.language.powershell"},1:{name:"punctuation.definition.variable.powershell"},3:{name:"variable.other.member.powershell"}},comment:"Style preference variables as language variables so that they stand out.",match:"(\\$)(?i:(ConfirmPreference|DebugPreference|ErrorActionPreference|ErrorView|FormatEnumerationLimit|InformationPreference|LogCommandHealthEvent|LogCommandLifecycleEvent|LogEngineHealthEvent|LogEngineLifecycleEvent|LogProviderHealthEvent|LogProviderLifecycleEvent|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount|MaximumHistoryCount|MaximumVariableCount|OFS|OutputEncoding|PSCulture|PSDebugContext|PSDefaultParameterValues|PSEmailServer|PSItem|PSModuleAutoLoadingPreference|PSModuleAutoloadingPreference|PSSenderInfo|PSSessionApplicationName|PSSessionConfigurationName|PSSessionOption|ProgressPreference|VerbosePreference|WarningPreference|WhatIfPreference))\\b"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"storage.modifier.scope.powershell"},4:{name:"variable.other.member.powershell"}},match:"(?i:(\\$)(global|local|private|script|using|workflow):((?:\\p{L}|\\d|_)+))"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"storage.modifier.scope.powershell"},4:{name:"keyword.other.powershell"},5:{name:"variable.other.member.powershell"}},match:"(?i:(\\$)(\\{)(global|local|private|script|using|workflow):([^}]*[^}`])(\\}))"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"support.variable.drive.powershell"},4:{name:"variable.other.member.powershell"}},match:"(?i:(\\$)((?:\\p{L}|\\d|_)+:)?((?:\\p{L}|\\d|_)+))"},{captures:{0:{name:"variable.other.readwrite.powershell"},1:{name:"punctuation.definition.variable.powershell"},2:{name:"punctuation.section.braces.begin"},3:{name:"support.variable.drive.powershell"},5:{name:"punctuation.section.braces.end"}},match:"(?i:(\\$)(\\{)((?:\\p{L}|\\d|_)+:)?([^}]*[^}`])(\\}))"}]}},scopeName:"source.powershell",aliases:["ps","ps1"]})]}}]);
