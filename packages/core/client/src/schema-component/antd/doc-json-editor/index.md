# Rich Text

富文本编辑器。其基于 [react-quill](https://github.com/zenoamaro/react-quill) 封装。

## Basic Usage

```ts
interface DocJsonEditorProps {
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
}
```

<code src="./demos/new-demos/basic.tsx"></code>

## Read Pretty

```ts
type DocJsonEditorReadPrettyProps = HtmlReadPrettyProps;
```

<code src="./demos/new-demos/read-pretty.tsx"></code>
