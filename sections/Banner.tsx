interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
    <div class="mt-52 w-screen h-[290px]">
      <div class="w-screen h-[290px] bg-[url('/photo-1.png')]"></div>
    </div>
  )
}