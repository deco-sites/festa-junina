interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
      <div class="h-screen w-screen flex justify-center items-center relative z-50">
          <div class="max-w-[1200px] h-[80%] max-h-[500px] w-3/4 flex justify-between">
              <div class="w-[700px] h-[100%] bg-[url('/photo-1-real.png')] bg-no-repeat bg-cover rounded-lg"></div>
              <span class="w-[440px] font-primary text-2xl text-white flex items-center">
                A Festa Junina é uma celebração popular no Brasil que ocorre durante o mês de junho, homenageando três santos católicos: Santo Antônio, São João e São Pedro. A origem das festividades juninas remonta às celebrações pagãs na Europa, onde se festejava a colheita e o solstício de verão. Com a chegada dos portugueses ao Brasil, essas tradições foram trazidas e incorporadas às festividades religiosas católicas.
              </span>  
          </div>
      </div>
  );
}