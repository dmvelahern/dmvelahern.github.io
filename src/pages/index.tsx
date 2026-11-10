
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Daniela Vela Hernandez - Research Portfolio"
    >
      <main className={styles.homeContainer}>

        {/* Left sidebar */}
        <aside className={styles.side}>
          <h2>About Me</h2>

          <h5>A little about me:</h5>

          <div className={styles.profileImage}>
            Profile Photo
          </div>

          <p>
            I'm a cybersecurity graduate student interested in
            reverse engineering, binary analysis, and systems security.
          </p>

          <h3>Research Interests</h3>

          <ul>
            <li>Reverse Engineering</li>
            <li>Binary Code Similarity Detection</li>
            <li>Malware Analysis</li>
            <li>Systems Security</li>
            <li>Trusted Execution Environments</li>
          </ul>

          <h3>Find Me</h3>

          <p>
            <a href="https://www.linkedin.com/in/daniela-vela-hernandez-225894269/">
              LinkedIn
            </a>
          </p>

          <p>
            <a href="https://github.com/dmvelahern">
              GitHub
            </a>
          </p>
        </aside>

        {/* Main content */}
        <section className={styles.main}>

          <article>
            <h2>Welcome to my corner of the internet!</h2>

            <h5>Research, projects, and things I'm learning.</h5>

            <p>
              This website serves as a collection of my research,
              technical experiments, projects, and notes.
            </p>
          </article>

          <hr />

          <article>
            <h2>Current Research</h2>

            <h5>Binary Code Similarity Detection</h5>

            <div className={styles.projectImage}>
              CFG Visualization
            </div>

            <p>
              Investigating whether LLVM optimization passes applied
              after binary lifting can improve the structural
              consistency of control-flow graphs across architectures
              and compiler optimization levels.
            </p>

            <Link to="/docs/research/bcsd/overview">
              Explore my research →
            </Link>
          </article>

          <br />

          <article>
            <h2>Other Projects</h2>

            <h5>Trusted Execution Environments</h5>

            <p>
              Exploring secure machine learning inference using
              ARM TrustZone and OP-TEE.
            </p>

            <Link to="/docs/research/tee/overview">
              Read about the project →
            </Link>
          </article>

          <br />

          <article>
            <h2>Technical Notes</h2>

            <p>
              Notes, experiments, and lessons learned while
              exploring LLVM, rev.ng, Ghidra, and reverse engineering.
            </p>

            <Link to="/docs/intro">
              Browse documentation →
            </Link>
          </article>

        </section>
      </main>
    </Layout>
  );
}

