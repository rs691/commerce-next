import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
      <section className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 font-headline">
          About Steffen's Sign & Design
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          From our family to yours, we bring passion and precision to every piece of wood we touch.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
          <Image
            src="https://placehold.co/800x600.png"
            alt="The workshop at Steffen's Sign & Design"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            data-ai-hint="woodworking workshop"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold font-headline">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2015 by John Steffen, a third-generation woodworker, Steffen's Sign & Design started in a small home garage with a love for traditional craftsmanship and an eye for modern design. What began as a weekend hobby creating custom signs for friends and family quickly grew into a full-time passion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we're a small team of dedicated artisans who believe that the best products are made with care, attention to detail, and a personal touch. We combine timeless woodworking techniques with modern technology to create unique, high-quality pieces that tell a story.
          </p>
        </div>
      </section>

      <section className="mb-12 md:mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 font-headline">Our Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                </div>
              <CardTitle>Passion</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              We are passionate about wood as a medium. We love its warmth, its character, and the endless possibilities it offers. This passion drives every cut, every carving, and every finish.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="items-center">
                 <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <Target className="h-6 w-6 text-primary" />
                </div>
              <CardTitle>Precision</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              From the initial design to the final sanding, we are meticulous. We use state-of-the-art tools alongside time-honored techniques to ensure every detail is perfect.
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="items-center">
                 <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <Eye className="h-6 w-6 text-primary" />
                </div>
              <CardTitle>Personality</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              We believe every piece should be as unique as the person who owns it. That's why we specialize in custom work, collaborating with you to bring your vision to life.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center bg-muted/50 rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6 font-headline">Meet the Founder</h2>
        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-card">
          <AvatarImage src="https://placehold.co/100x100.png" alt="John Steffen" data-ai-hint="portrait man" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold">John Steffen</h3>
        <p className="text-muted-foreground mb-4">Founder & Master Craftsman</p>
        <p className="max-w-xl mx-auto text-foreground/80">
          "I've always been fascinated by the story a piece of wood can tell. My goal is to add a new chapter to that story—yours. Thank you for letting us be a part of your home."
        </p>
      </section>
    </div>
  );
}
