// `pages` directory
 
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const projects = await res.json()
 
  return { props: { projects } }
}
 
export default function Index({ projects }) {
  return projects.map((project) => <div>{project.name}</div>)
}