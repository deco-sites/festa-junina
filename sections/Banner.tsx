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
              <div class="w-[595px] h-[100%] bg-[url('/nphoto-1.png')] bg-no-repeat bg-cover rounded-lg"></div>
              <div class="flex justify-evenly flex-col">
                <h3 class="font-primary text-3xl text-white">Quadrilha</h3>
                <span class="w-[440px] font-primary text-2xl text-white flex items-center">
                  A dança da quadrilha é uma das principais atrações das festas juninas. Originada das danças de salão europeias, a quadrilha foi adaptada no Brasil, ganhando elementos caipiras e um enredo que simula um casamento na roça.
                </span>  
              </div>
          </div>

          <div class="max-w-[1200px] h-[80%] max-h-[400px] w-3/4 flex justify-between">
              <div class="flex justify-evenly flex-col">
                <h3 class="font-primary text-3xl text-white">Comida tipica</h3>
                <span class="w-[440px] font-primary text-2xl text-white flex items-center">
                A culinária junina é rica e variada, com destaque para pratos feitos à base de milho, como pamonha, canjica, curau, bolo de milho, e outras delícias como arroz doce, quentão, vinho quente, cocada e pé de moleque.
                </span>  
              </div>
              <div class="w-[595px] h-[100%] bg-[url('/nphoto-2.png')] bg-no-repeat bg-cover rounded-lg"></div>
          </div>
      </div>
  )
}