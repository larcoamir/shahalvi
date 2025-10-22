import fs from 'fs'
import path from 'path'

export default function About() {
  const repoRoot = path.resolve(process.cwd(), '..')
  let md = 'About content not found.'
  try {
    md = fs.readFileSync(path.join(repoRoot, 'about.md'), 'utf8')
  } catch (e) {
    // ignore
  }

  return (
    <article>
      <h2>About</h2>
      <pre style={{whiteSpace:'pre-wrap'}}>{md}</pre>
    </article>
  )
}
