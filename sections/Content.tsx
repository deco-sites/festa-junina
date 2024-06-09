interface Props {
  /**
  * @description The description of name.
  */
  title_One?: string;
  title_Two?: string;
  subtitle_One?: string;
  subtitle_Two?: string;
}

export default function Section({ title_One = "Capy", }: Props) {
  return <div>Hello {name}</div>
}