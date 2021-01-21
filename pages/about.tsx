import Head from 'next/head'
import styles from '../styles/modules/About.module.scss'

const About = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>소개 - luce.log</title>
      </Head>
      <section className="about__container">
        <div className={styles.head}>
          <div className={styles.head__name}>
            <h1>김기환</h1>
            <h2>Kihwan Kim</h2>
          </div>
          <a rel="noreferrer" target="_blank" href="https://www.github.com/luceinaltis">
            <img
              src="https://avatars1.githubusercontent.com/u/60007241?s=460&u=cd5b300ced0dc70d995519bb63237581bda7ed39&v=4"
              alt="profile"
            />
          </a>
        </div>
        <div className={styles.link}>
          <span>
            <i className="far fa-envelope" />
            luceinaltis2020@naver.com
          </span>
          <span>
            <i className="fab fa-github-square" />
            <a rel="noreferrer" target="_blank" href="https://www.github.com/luceinaltis">
              github.com/luceinaltis
            </a>
          </span>
        </div>
        <div className={styles.info}>
          <p>
            궁금한게 있으면 가리지않고 배우는 개발자입니다. <br />
            대학생때부터 개발에 흥미를 가지고 소프트웨어 엔지니어링에 대해 공부하고 있습니다. <br />
            블로그를 운영하면서 문제해결능력에 관심이 생겨 글을 읽고 핵심을 파악하여 생각을 정리하는
            능력을 기르고 있습니다.
          </p>
          <ul>
            <label htmlFor="EDUCATION">EDUCATION</label>
            <li>
              <div className={styles.cell}>
                <div>한양대학교 컴퓨터소프트웨어학부</div>
                <div className={styles.right}>Mar 2016 ~ PRESENT</div>
              </div>
            </li>
          </ul>
          <ul>
            <label htmlFor="EXPERIENCE">EXPERIENCE</label>
            <li>
              <div className={styles.cell}>
                <div>SW 마에스트로 프로그램</div>
                <div className={styles.right}>May 2020 ~ Dec 2020</div>
              </div>
            </li>
          </ul>
          <ul>
            <label htmlFor="SKILLS">SOFTWARE DEVELOPMENT SKILLS</label>
            <li>
              <div className={styles.skill}>
                <span>Backend</span>
                <span>NodeJS, Python, TypeScript and AWS (EC2, S3, etc)</span>
              </div>
            </li>
            <li>
              <div className={styles.skill}>
                <span>Frontend</span>
                <span>React, React Hooks, Redux, TypeScript, and Flutter</span>
              </div>
            </li>
            <li>
              <div className={styles.skill}>
                <span>DevOps</span>
                <span>Jenkins, Agile, and Lint</span>
              </div>
            </li>
            <li>
              <div className={styles.skill}>
                <span>Database</span>
                <span>PostgreSQL, and SQLite</span>
              </div>
            </li>
            <li>
              <div className={styles.skill}>
                <span>Others</span>
                <span>Little experience in Java, C++, and C#</span>
              </div>
            </li>
          </ul>
          <div className={styles.bottom}>
            <div>
              자세한 이력은
              <a rel="noreferrer" target="_blank" href="http://static.luce.today/resume/resume.pdf">
                Resume
              </a>
              를 참고해주세요.
            </div>
            <div>마지막 수정일: 2020.01.20. </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
