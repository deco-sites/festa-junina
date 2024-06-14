import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return (
    <>
      {/* Star */}
      <div class="fixed top-20 left-1/3">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}

      {/* Star */}
      <div class="fixed top-64 left-1/4">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}

      {/* Star */}
      <div class="fixed top-24 left-2/3">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}

      {/* Star */}
      <div class="fixed top-80 right-1/3">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}

      {/* Star */}
      <div class="fixed top-8 left-3/4">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}


      {/* Star */}
      <div class="fixed top-14 left-2/4">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}

      {/* Star */}
      <div class="fixed top-64 left-2/4">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}

      {/* Star */}
      <div class="fixed top-20 left-32">
        <Image src="/star.png"></Image>
      </div>
      {/* Star */}

      <Image src="/image-junina.png" class="fixed bottom-80 left-36 animate-bullet"></Image>
      <Image src="/image-junina.png" class="fixed bottom-96 left-80 animate-bullet2"></Image>
      <Image src="/image-junina.png" class="fixed bottom-0 left-96 animate-bullet3"></Image>
      <Image src="/image-junina.png" class="fixed bottom-56 -left-2/4 animate-bullet"></Image>
      <Image src="/image-junina.png" class="fixed bottom-40 right-96 animate-bullet2"></Image>
      <Image src="/image-junina.png" class="fixed bottom-5 right-2/4 animate-bullet"></Image>
      <Image src="/image-junina.png" class="fixed bottom-5 right-1/4 animate-bullet"></Image>
      <Image src="/image-junina.png" class="fixed bottom-5 right-24 animate-bullet3"></Image>
    </>
  )
}