export interface eventTimeProps {
  time: string;
  date: string;
}

export interface eventProps extends eventTimeProps {
  image: string;
  text: string;
}

// Used in EventsSection.tsx and its' child component Event.tsx
