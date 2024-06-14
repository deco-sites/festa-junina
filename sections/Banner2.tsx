interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
    <div class="h-screen w-screen flex flex-col justify-center items-center relative z-50 gap-16">
          <div class="max-w-[1200px] h-[80%] max-h-[400px] w-3/4 flex justify-between">
              <div class="w-[595px] h-[100%] bg-[url('/photo-3.png')] bg-no-repeat bg-cover rounded-lg"></div>
              <div class="flex justify-evenly flex-col">
                <h3 class="font-primary text-3xl text-white">Brincadeiras</h3>
                <span class="w-[440px] font-primary text-2xl text-white flex items-center">
                  As festas juninas são conhecidas por suas diversas brincadeiras tradicionais, como a pescaria, jogo de argolas, corrida do saco, correio elegante e cadeia.
                </span>  
              </div>
          </div>

          <div class="max-w-[1200px] h-[80%] max-h-[400px] w-3/4 flex justify-between">
              <div class="flex justify-evenly flex-col">
                <h3 class="font-primary text-3xl text-white">Decoração</h3>
                <span class="w-[440px] font-primary text-2xl text-white flex items-center">
                As festividades são decoradas com bandeirinhas coloridas, balões de papel e palha, criando um ambiente alegre e festivo.
                </span>  
              </div>
              <div class="w-[595px] h-[100%] bg-[url('/photo-4.png')] bg-no-repeat bg-cover rounded-lg"></div>
          </div>
      </div>
  )
}