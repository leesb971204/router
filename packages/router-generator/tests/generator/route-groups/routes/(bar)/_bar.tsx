import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(bar)/_bar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(foo)/_bar/hello"!</div>
}
