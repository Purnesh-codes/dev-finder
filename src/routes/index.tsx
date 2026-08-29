import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className='font-bold text-2xl'>HELLO FROM HOME PAGE</div>;
}
