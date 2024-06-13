interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
    <div class="mt-52 mb-52 w-full flex justify-center gap-10">
      <div class="w-[900px] h-[700px] bg-[url('/photo-1.png')] bg-no-repeat bg-cover rounded-lg"></div>
      <div class="w-[460px] h-[700px] flex flex-col justify-around">
        <div class="w-[460px] h-[400px] bg-[url('/photo-2.png')] bg-no-repeat bg-cover rounded-lg"></div>
        <span class="w-[460px] font-primary text-xl text-[#234E6E]">
          A origem da Festa Junina remonta às festividades pagãs na Europa, 
          que comemoravam a chegada do solstício de verão. Com a cristianização,
          essas celebrações foram adaptadas para homenagear santos católicos. No Brasil,
           a festa foi trazida pelos colonizadores portugueses e incorporou elementos 
          das culturas indígena, africana e de outras tradições europeias, criando uma
           celebração única e rica em diversidade cultural.
        </span>
      </div>
    </div>
  );
}