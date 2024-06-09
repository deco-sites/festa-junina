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
  return (
    <div class="w-full">
      <div class="absolute w-96 h-28 bg-[#FF508A] rounded-r-3xl top-40"></div>
      <div class="absolute w-28 h-32 bg-[#FFBA48] rounded-r-3xl top-56"></div>

      <div class="absolute right-44 top-56">
        <h1 class="text-9xl text-[#FF508A] font-primary text-right">
            {title_One}
            <p class="text-[#234E6E]">{title_Two}</p>
        </h1>
        <p class="text-[#FF508A] text-6xl font-primary text-right mt-4">{subtitle_One}</p>
        <p class="text-[#234E6E] text-xl font-primary text-right mt-4">{subtitle_Two}</p>
      </div>

      <div class="absolute bottom-0 w-full flex justify-between">
          <div class="w-2/5 h-28 bg-[#224D6C] rounded-tr-3xl"></div>
          <div class="w-28 h-14 bg-[#00C2C9] rounded-tl-3xl absolute bottom-0 right-0"></div>
      </div>
    </div>
  )
}