import Link from 'next/link';
import { ArrowDownCircle } from 'react-feather';

import Layout from 'components/layout';
import InfoCardSection from 'components/info-card-section';

import styles from 'styles/pages/home.module.scss';

const Home: React.FC = () => {
  return (
    <Layout>
      <section className={styles.splashWrapper}>
        <div className={styles.welcomeContainer}>
          <p className={styles.welcomeMessage}>
            Hello, and welcome to my quaint pocket of the internet. This is where I share my love of software, books,
            writing, and philosophy on a semi-regular basis. Please feel invited to poke around, and reach out if you
            would like to connect.
          </p>
          <p className={styles.closingMessage}>Have a great day,</p>
          <h2 className={styles.signature}>Rheisen</h2>
        </div>
        <div className={styles.pageDownContainer}>
          <ArrowDownCircle className={styles.pageDownIcon} size={28} />
        </div>
      </section>

      <InfoCardSection location={true}>
        <div className={styles.infoCardSectionContentWrapper}>
          <h2>About Me</h2>
          <p>
            Getting to know someone is a complex process. It&apos;s easy to forget that every person contains a lifetime
            of formative experiences, and likewise it&apos;s easy to assume that the people we interact with know more about our
            personal experiences than we've revealed to them. It's impossible to share all of our experiences with
            another person, or even a decent fraction of them in a timely manner. How then should we go about conveying
            ourselves so that we are understood by others, and so that we form meaningful relationships?
          </p>
          <p>
            I can't claim to have the "correct" answer to this question, but I think that we can benefit from
            introspecting, determining what our values are, identifying why we have them, and seeing which values
            drive our behavior and in what ways. Following this, sharing our values with others can help communicate
            who we are more succinctly, and open the door to meaningful conversation.
          </p>
          <p>
            We can cross-examine our values, for example. We can compare the journeys we've had to reach shared
            values, and/or have empathetic conversations regarding the areas where our values diverge. I don't think
            any set of values is "correct", and so these conversations should always be, in my opinion, undertaken
            with an open mind. In this manner, I think we can come to understand one another, and form meaningful
            relationships.
          </p>
          <p>
            Continuing along these lines, I'd like to share my values with you! I hope that through this we can
            begin to form a meaningful (albeit initially one-sided) relationship. If you'd like to reach
            out to me about these values, or share a value with me that you think could be of benefit, please email
            me! I'd be happy to talk with you and bond over a values discussion.
          </p>
          <div className={styles.articleBreak} />
          <h3>Wisdom</h3>
          <p>
            I'm a huge nerd when it comes to Greek and Roman philosophy, which is what initially led me to set wisdom
            as the pinnacle of my aspirations. I define wisdom as having a perfect understanding of the mind, which I
            find aligns with some spiritual conceptions of enlightenment. Because of this value I meditate
            frequently, introspect deeply, and seek to exercise mindfulness throughout my waking and sleeping hours.
          </p>
          <h3>Temperance</h3>
          <p>
            Similar to wisdom, I was led to temperance after reading and considering <em>Meditations</em> by Marcus
            Aurelius. I define temperance as maintaining self-control, and using self-control to act in accordance with
            ones values. To me this means maintaining self-control and acting with courage and compassion.
            Tangentially, I view temperance as being the first step in achieving wisdom.
          </p>
          <h3>Courage</h3>
          <p>
            I define courage as knowing one's responsibilities, knowing one's capabilities, and fully utilizing those
            capabilities towards those responsibilities. To me this means realizing my responsibilities as a human,
            a son, a brother, a friend, a student, etc. and applying my capabilities to those responsibilities to
            the best of my ability. I view courage as the guide for how I should act.
          </p>
          <h3>Compassion</h3>
          <p>
            I define compassion as caring for myself and others. I define caring for something as sympathizing with
            it, and acting virtuously in its benefit. To me this ultimately means sympathizing with myself and
            others, and acting virtuously for the benefit of myself and others. I view compassion as the guide for
            what purpose I should act.
          </p>
          <div className={styles.articleBreak} />
          <p>
            My journey to these values and these value definitions has been greatly inspired by Stoic philosophy and
            Buddhist ethics, both of which I owe an incredible debt of gratitude. I am also forever grateful for my
            family, whose encouragement to try my best brought about a growth mindset from a young age. I attribute
            their influence and that mindset for having made my values an evolving doctrine in my efforts to realize
            the best version of myself.
          </p>
          <p>
            If you've made it to the end here, I hope you feel as though you've gotten to know me better. If you
            think you have improvements for my value definitions, please feel invited to share them with me - I'd
            love to hear from you! If something in my values / value definitions resonates with you, please feel
            welcome to make it your own. If you'd like to view <Link href='/projects'>the things I'm working on</Link>
            , <Link href='/photography'>the pictures I've taken</Link>, or
            <a href='https://medium.com/@rheisen' target='_blank' rel='noopener noreferrer'> my writings</a>, please
            feel encouraged to explore the rest of this site. In any case, I hope you have a great day!
          </p>
        </div>
      </InfoCardSection>
    </Layout>
  );
};

export default Home;
