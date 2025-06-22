import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Summer Craft Fair',
    date: 'August 17, 2024',
    location: 'Central Park, Springfield',
    description: 'Join us for a showcase of local artisans. We\'ll have a booth featuring our latest custom signs and woodwork.',
  },
  {
    title: 'Holiday Market',
    date: 'November 23-24, 2024',
    location: 'Exposition Center, Springfield',
    description: 'Get a head start on your holiday shopping! Find unique, handcrafted gifts for everyone on your list.',
  },
  {
    title: 'Woodworking Workshop: Basics of Engraving',
    date: 'September 14, 2024',
    location: 'Our Workshop, 123 Main St, Springfield',
    description: 'A hands-on workshop where you can learn the basics of laser engraving on wood. Limited spots available!',
  },
  {
    title: 'Spring Home & Garden Show',
    date: 'April 5-6, 2025',
    location: 'Convention Hall, Springfield',
    description: 'Discover new trends for your home and garden. We will be showcasing our custom outdoor signs and furniture.',
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
      <section className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 font-headline">
          Upcoming Events
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Come see us in person! We love meeting our customers and showing our work.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {events.map((event, index) => (
          <Card key={index} className="flex flex-col bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <p className="text-foreground/90 mt-2 flex-grow">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
