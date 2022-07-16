export interface eventTimeProps {
  time: string;
  date: string;
}

interface eventFeaturedImages {
  id: number;
  path: string;
}

interface eventLinks {
  prev: string | null;
  next: string | null;
}
interface eventMeta {
  current_page: number;
  total: number;
}

interface eventData {
  id: number;
  title: string;
  published_at: string;
  featured_images: eventFeaturedImages[];
  content_html: string;
}

export interface eventProps {
  data: eventData[];
  links: eventLinks;
  meta: eventMeta;
  loaded: boolean;
}

export type eventType = [eventProps, React.Dispatch<any>];

export interface eventProp {
  image: string;
  title: string;
  time: string;
  date: string;
  content: string;
}

// Used in EventsSection.tsx and its' child component Event.tsx
