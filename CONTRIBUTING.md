# 贡献指南

## 用语规范

本项目贡献者包括跨性别者等多元文化群体，请在贡献时尊重 ta 人，使用友善礼貌的词语。

## 提交规范

> 提交说明中所有字段均应在 CJK 字符与非 CJK 字符间插入空格。

提交说明格式：

```
<type>[(<scope>)]: <subject>
<空行>
<body>
<空行>
<footer>
```

- `<anything here>`：应被实际内容代替的字段
- `[optional thing here]`：可选的字段

### type

提交类型。

必须。

可用值：

| 类型   | 更改范围      | 更改行为                                     |
| ------ | ------------- | -------------------------------------------- |
| feat   | 代码          | 添加新功能                                   |
| fix    | 代码          | 修复由代码错误引发的未预期的问题             |
| rfct   | 代码          | 在不改变代码行为的情况下更改、重写、重构代码 |
| style  | 代码或内容    | 更改文本格式风格，如空格、缩进、大小写       |
| typo   | 内容          | 修正不具有争议且由输入错误产生的错别字       |
| grammar| 内容          | 修正不符合汉语规范的语法错误                 |
| ambig  | 内容          | 修正易造成误解或具有歧义的内容               |
| punctua| 内容          | 修正标点错误                                 |
| chore  | 非内容        | 杂务                                         |
| dep    | 版本锁定文件  | 升级/降级依赖包                              |
| ci     | CI 工作流代码 | 更改 CI 工作流行为                           |

### scope

更改范围。

内容更改必须。

格式（内容更改）：`<cha>/<sec>[:<line>[,<end_line>]]`

- cha：章号
- sec：节号
- line：行号
- end_line：结束行号

特例：大量综合性更改使用 `*` 填充。

可并列，使用 `; ` 分隔。

为符合此规范，单个提交最多执行一种（可被单个 type 和单个 body 描述的）内容更改。

示例（内容更改）：

- `01/023`
- `01/023:45`
- `01/023:45,67`
- `01/023; 04/567:89; 10/001:1,10`

### subject

提交描述。

必须。

以动词开头，使用第一人称、一般现在时编写。首字母小写，句尾不添加句号。

#### 特殊标签

以下标签具有特殊效果，应添加在 subject 后：

- `[skip ci]`：跳过 CI 构建

- `[skip release]`：跳过发布 Release

### body

详细提交描述。

内容更改必须。

使用第一人称、一般现在时编写。首字母大写，句尾添加句号。

格式（内容更改）：`<before> -> <after>`

- before：更改前内容段
- after：更改后内容段

### footer

额外说明。

可选

用例：关闭 issue、签名。

示例：

- `Resolves #1, resolves #2, resolves #3`
- `Signed-off-by: Someone <someone@example.com>`

### revert

revert 提交的提交说明第一行为 `Revert "<reverted_line1>"`，`<reverted_line1>` 是被 revert 提交的提交说明第一行；body 为 `This reverts commit <hash>.`，`<hash>` 是被 revert 提交的 SHA，body 可附加 revert 理由。

### 提交说明示例

内容更改：

```
typo(01/017:77): 修正错别字

初次之外 -> 除此之外

Signed-off-by: command_block <mtf@ik.me>
```

非内容更改：

```
feat: 支持 MOBI 版

使用 Calibre 的 ebook-convert 命令将 EPUB 转换为 MOBI 以实现支持。

Signed-off-by: command_block <mtf@ik.me>
```
