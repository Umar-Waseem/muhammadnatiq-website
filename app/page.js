
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-card">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <HomeIcon className="h-6 w-6" />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#acheivements" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Achievements
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </header>
        <section className="relative bg-[url('/natiq-sun.jpeg')] bg-cover bg-right lg:bg-center min-h-screen flex items-center justify-center">
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>

          <div className="container relative z-10 px-4 md:px-6 flex flex-col items-start justify-center">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl lg:text-black text-white">
                  Muhammad Natiq Rehman
                </h1>
                <p className="max-w-[600px] text-white lg:text-black md:text-xl">
                  Leading real estate executive in Pakistan with a 4 year experience and proven track record of success
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="w-full text-white bg-black hover:bg-white hover:text-black">
                  Contact Me
                </Button>
                <div className="flex items-center gap-2">
                  <Link href="#" className="text-black hover:text-primary" prefetch={false}>
                    <FacebookIcon className="h-8 w-8" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-black hover:text-primary" prefetch={false}>
                    <TwitterIcon className="h-8 w-8" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-black hover:text-primary" prefetch={false}>
                    <InstagramIcon className="h-8 w-8" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <section id="about" className="bg-card py-12 md:py-24 lg:py-32 min-h-screen flex items-center">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
          <div className="space-y-4 text-center flex flex-col items-center md:items-start">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">About Muhammad</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Muhammad Natiq is a dedicated individual with sales that drive high results. Highly aware of the changing real estate market trends and needs, Muhammad has a rich 3+ years of experience while ensuring high customer satisfaction and growth in the real estate market.

                While fostering great long term relationships with clients, Muhammad is committed to his work where he aims to produce results that lead to the growth of his clients and his company.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/natiq.jpeg"
              width="550"
              height="550"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>

      <section id="acheivements" className="relative bg-cover bg-center bg-card py-12 md:py-24 lg:py-32 min-h-screen flex items-center" style={{ backgroundImage: "url('/natiq-5g.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
        <div className="container px-4 md:px-6 flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center justify-center space-y-12 text-center w-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Achievements</h2>
              <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Proud of the work done and the recognition received.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
              <li className="bg-background rounded-lg p-4 flex flex-col items-center justify-center space-y-2 bg-gray-100">
                <TrophyIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Industry Leader</h3>
                <p className="text-muted-foreground text-sm">
                  Recognized as one of the top real estate companies in the region.
                </p>
              </li>
              <li className="bg-background rounded-lg p-4 flex flex-col items-center justify-center space-y-2 bg-gray-100">
                <StarIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Highest Customer Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Clients consistently rate us as the best in the business.
                </p>
              </li>
              <li className="bg-background rounded-lg p-4 flex flex-col items-center justify-center space-y-2 bg-gray-100">
                <AwardIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Award-Winning Performance</h3>
                <p className="text-muted-foreground text-sm">
                  Award winning track record
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card px-10 py-12 md:py-24 lg:py-32 min-h-screen flex items-center">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center w-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Business Done With Brands</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Muhammad has had the privilege of working with some of the top brands in the real estate industry. Check out some of the companies and socities collaboration has been done with.
              </p>
            </div>
            <Carousel className="w-full max-w-5xl">
              <CarouselContent>
                <CarouselItem className="basis-1/3">
                  <div className="p-1">
                    <Image
                      src="/next.svg"
                      width="200"
                      height="100"
                      alt="Brand Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="p-1">
                    <Image
                      src="/vercel.svg"
                      width="200"
                      height="100"
                      alt="Brand Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="p-1">
                    <Image
                      src="/next.svg"
                      width="200"
                      height="100"
                      alt="Brand Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="p-1">
                    <Image
                      src="/vercel.svg"
                      width="200"
                      height="100"
                      alt="Brand Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>


      <section id="contact" className="bg-card py-12 md:py-24 lg:py-32 flex items-center min-h-screen">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl">
            <div className="space-y-4 text-center md:text-left md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Get in Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                Get in touch to understand how my services can help.
              </p>
              <Link
                href="https://wa.me/+923325566557"
                className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <MessageCircleIcon className="h-5 w-5 mr-2" />
                Whatsapp
              </Link>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email Address" />
              <Textarea placeholder="Write about yourself briefly or share a website" rows={3} />
              <Textarea placeholder="What can I do for you?" rows={5} />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </section>



      <footer className="bg-card-foreground px-4 md:px-6 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-white">&copy; 2024 Muhammad Natiq. All rights reserved.</p>
            <p className="text-xs text-white">5G properties, F-11 Markaz - Islamabad - In front of Olympus Mall</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}