interface Props {
  /**
  * @description The description of name.
  */
  title_One?: string;
  title_Two?: string;
  subtitle_One?: string;
  subtitle_Two?: string;
}

export default function Section({ title_One = "Festa", title_Two = "Junina", subtitle_One = "Celebre", subtitle_Two = "Viva São João, vamos festejar com alegria e amor!" }: Props) {
  return <div>Hello {name}</div>
}