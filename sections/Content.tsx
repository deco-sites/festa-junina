import Image from "apps/website/components/Image.tsx";

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
    <div class="w-full h-screen relative z-50">
      <div class="absolute bottom-0 w-full flex justify-between">
        <h1 class="font-primary text-[76px] text-white w-[450px] ml-20 mb-10">Seja bem vindo a Festa junina</h1>
      </div>

      <Image src="/fogueira.png" class="absolute bottom-10 right-48"></Image>
      <Image src="/gif.gif" class="absolute z-10 bottom-[55px] right-[25px]"></Image>
      <Image src="/shadowimg.png" class="absolute bottom-[-57px] right-[-180px]"></Image>

    </div>
  )
}