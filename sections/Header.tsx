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
  return (<header class="flex justify-between h-20 items-center pr-20 px-20">
      <nav>
        <ul class="flex gap-8">
          <li class="text-[#224D6C] text-xl font-primary cursor-pointer">
            {name_One}
          </li>
          <li class="text-[#224D6C] text-xl font-primary cursor-pointer">
            {name_Two}
          </li>
          <li class="text-[#224D6C] text-xl font-primary cursor-pointer">
            {name_Three}
          </li>
          <li class="text-[#224D6C] text-xl font-primary cursor-pointer">
            {name_Four}
          </li>
        </ul>
      </nav>

      <form>
        <input type="text" placeholder="Pesquise" class="bg-[#224D6C] w-72 h-12 rounded-btn px-5 placeholder:text-white text-white outline-none"/>
      </form>
  </header>)
}