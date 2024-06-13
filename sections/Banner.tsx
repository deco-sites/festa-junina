interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
    <div class="mt-52 w-full h-[290px]">
      <div class="w-full h-[290px] bg-[url('/banner.png')]"></div>
    </div>
  )
}