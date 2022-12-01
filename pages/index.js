import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} - Software Developer</title>
        </Head>
        <Container className="">
          <Intro />
          <div className="space-y-6">
            <section className=" text-2xl text-center font-semibold	leading-normal">
              <p>Hello, I am Nick. I am a software developer in Milwaukee, WI.</p>
            </section>

            <section id="about" className="container content-section text-center">
              <div className="row">
                <div className="space-y-4">
                  <h2 className="text-4xl uppercase">Employment History</h2>
                  <p className="font-bold text-xl">Software Engineer,  <a href="https://www.northwesternmutual.com/who-we-are/" target="_blank">Northwestern Mutual</a>, September 2022 - Current</p>
                  <p>Software Engineering Manager, <a href="https://curo.com/about" target="_blank">CURO Financial Technologies Corp</a>, November 2021 - September 2022</p>
                  <p>Software Architect, <a href="https://www.milwaukeetool.com/company" target="_blank">Milwaukee Tool</a>, February 2017 - November 2021</p>
                  <p>Software Developer, <a href="http://www.rwbaird.com/who-we-are/" target="_blank">Robert W. Baird</a>, November 2015 - February 2017</p>
                  <p>Software Engineer, <a href="http://www.projectfoundry.com/" target="_blank">Project Foundry</a>, September 2015 - November 2015</p>
                  <p>Software Engineer, <a href="https://www.qg.com/" target="_blank">Quad Graphics</a>, May 2012 - September 2015</p>
                </div>
              </div>
            </section>

            <section id="download" className="content-section text-center">
              <div className="download-section">
                <div className="container">
                  <div className=" space-y-4">
                    <h2 className="text-4xl uppercase">Projects</h2>

                    <h2 className="text-2xl"><a target="_blank" href="https://scrimple-web.netlify.app/" className="btn btn-default btn-lg">Scrimple Logger</a></h2>
                    <p>Super simple solution for capturing client logs. Developing using React & Golang</p>

                    <h2 className="text-2xl"><a target="_blank" href="https://dadreviewedapps.netlify.app/" className="btn btn-default btn-lg">Dad reviewed apps</a></h2>
                    <p>Site where I review and rank mobile apps and games for children trying to identify which ones are safe and actually educational.</p>

                    <h2 className="text-2xl"><a href="https://cageroulette.netlify.com/#/" target="_blank" className="btn btn-default btn-lg">Cage Roulette</a></h2>
                    <p>Fun experiment built with Preact</p>

                    <h2 className="text-2xl"><a href="https://www.iwishiknewbefore.com/" target="_blank" className="btn btn-default btn-lg">I Wish I Knew Before</a></h2>
                    <p>Static web blog.</p>

                    <h2 className="text-2xl"><a href="https://www.getpetmatcher.com/" target="_blank" className="btn btn-default btn-lg">Petmatcher</a></h2>
                    <p>Mobile app built with Ionic to help people adopt pets from shelters.</p>

                    <h2 className="text-2xl"><a href="http://dattweetstreamer.herokuapp.com/" target="_blank" className="btn btn-default btn-lg">Live Tweet Streamer</a></h2>
                    <p>Twitter stream reader using Angular.js, Socket.io, and Node.js to read twitter streaming api. It currently tracks trending tweets in the Milwaukee area.</p>

                    <h2 className="text-2xl"><a href="http://www.datmusicdoe.com/" target="_blank" className="btn btn-default btn-lg">Dat Music Doe</a></h2>
                    <p>Blog about up and coming underground hip-hop. Built using Ruby On Rails and Hosted on Heroku</p>

                    <h2 className="text-2xl" >My Meal Planr</h2>
                    <p>A meal planning application I am currently developing to auto-generate meal plans every month. The application is currently being developed using the MEAN stack</p>
                  </div>
                </div>
              </div>
            </section>
            <section id="download" className="content-section text-center">
              <div className="download-section">
                <div className="container">
                  <div className=" space-y-4">
                    <h2 className="text-4xl uppercase">Data Science</h2>
                    <p>I am currently a student at the <a href="https://sps.cuny.edu/" target="_blank">CUNY School of Professional Studies</a> pursuing a Master's degree in Data Science</p>
                    <p>School GitHub Account <a href='https://github.com/nolivercuny' target='_blank'>nolivercuny</a></p>
                    <p>Published Assignments <a href='https://rpubs.com/noliver' target='_blank'>RPubs</a></p>
                </div>
              </div>
              </div>
            </section>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
