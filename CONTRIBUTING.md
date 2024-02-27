# 贡献指南

## <a name="politeness"></a>用语规范

本项目贡献者包括跨性别者等多元文化群体，请在贡献时尊重 ta 人，使用友善礼貌的词语。

## <a name="commit"></a>提交规范

### <a name="amount"></a>单个提交更改量

每一个提交只做一件事，即只适用一个 [Type 字段](#type)和一个 [Scope 字段](#scope)。过多更改堆积在一个提交时应当按类型拆分成多个提交。

### <a name="message"></a>提交说明

> 提交说明的所有格式部分均使用英文半角标点，只有字段内容视使用语言使用全角标点。所有中文部分应遵守盘古之白（在 CJK 字符与英文之间插入空格）。

```
<Type>(<Scope>): <Subject>
<空行>
<Body>
<空行>
<Footer>
```

#### <a name="header"></a>Header 部分

Header 部分是提交说明的第一行，包含 `<Type>`、`<Scope>` 和 `<Subject>` 三个字段。

##### <a name="type"></a>Type 字段

Type 字段描述提交的类型。此字段的可用值：

- feat：添加一个新功能。

- fix：修复代码中与预期行为不一致的问题。

- refactor：更改一处代码，没有造成功能及行为的变化。

- style：更改一处代码风格（如缩进）。

- typo：修正一个错别字（明显错误，没有争议）。

- grammar：修正一个语法错误（阅读不畅，存在争议）。

- ambig：修正一处有歧义的内容（造成误解，存在争议）。

- punctua：修正一处标点错误。

- chore：杂务，通常与代码和内容无关。

##### <a name="scope"></a>Scope 字段

Scope 字段描述提交的更改范围。此字段为可选字段。

此字段通常使用文件名、包名、类名或方法/函数名。涉及内容的更改通常使用 `<章节路径>:<更改行号>` 的格式，如 `11/45:14`；多行更改使用 `<章节路径>:<起始行号>,<结束行号>` 的格式，如 `19/19:8,10` 。

如果单个提交存在许多重复更改但无法用单一 Scope 字段描述，可以使用一个分号加一个空格 `; ` 分隔多个 Scope 字段，如 `11/45:14; 19/19:8,10`。此时多个并列 Scope 字段为一个整体的 Scope 字段。

全局/大量更改请使用星号 `*` 填充此字段。

##### <a name="subject"></a>Subject 字段

Subject 字段用于简短地描述提交。此字段应以动词开头，并使用第一人称、一般现在时。此字段首字母小写，句尾不添加句号，中文也是如此。

#### <a name="body"></a>Body 部分

Body 部分是提交说明的主体。此部分用于详细描述此提交。此部分使用第一人称、一般现在时。此字段首字母大写，句尾添加句号。

#### <a name="footer"></a>Footer 部分

Footer 部分用于承载额外内容，如关闭某个（或多个）issue，签名行。

```
Resolves #1, resolves #2, resolves #3
Signed-off-by: Someone <someone@example.com>
```

或其他不应放在 Header 和 Body 部分的内容。

#### <a name="revert"></a>Revert

Revert 提交的 Header 部分应以 `revert: ` 开头，后接被 revert 的提交的 Header，其 Body 部分应有 `This reverts commit <hash>.`，`<hash>` 是被 revert 的提交的 SHA，可以附加 revert 的理由。
