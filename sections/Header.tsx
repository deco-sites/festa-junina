interface Props {
  /**
  * @description The description of name.
  */
  name_One?: string;
  name_Two?: string;
  name_Three?: string;
  name_Four?: string;
}

export default function Section({ name_One = "Home", name_Two = "Sobre", name_Three = "Serviços", name_Four="Contatos"}: Props) {
  return (<header class="flex justify-between">
      <nav>
        <ul class="flex gap-8">
          <li class="text-[#224D6C] text-xl font-primary">
            {name_One}
          </li>
          <li class="text-[#224D6C] text-xl font-primary">
            {name_Two}
          </li>
          <li class="text-[#224D6C] text-xl font-primary">
            {name_Three}
          </li>
          <li class="text-[#224D6C] text-xl font-primary">
            {name_Four}
          </li>
        </ul>
      </nav>

      <form>
        <input type="text" />
      </form>
  </header>)
}