import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  HandHeart,
  HardHat,
  HeartPulse,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  X,
} from 'lucide-react';
import {
  type CSSProperties,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { BrandLogo } from './components/BrandLogo';
import { Reveal } from './components/Reveal';
import {
  services,
  teamRoles,
  trainingHighlights,
  type IconName,
} from './data/content';

const iconMap = {
  users: UsersRound,
  graduation: GraduationCap,
  leaf: Leaf,
  shield: ShieldCheck,
  route: Route,
  hardhat: HardHat,
  heart: HeartPulse,
  search: SearchCheck,
} satisfies Record<IconName, typeof UsersRound>;

const navItems = [
  { label: 'Le cabinet', href: '#cabinet' },
  { label: 'Expertises', href: '#expertises' },
  { label: 'Formations', href: '#formations' },
  { label: 'Particuliers', href: '#particuliers' },
  { label: 'Recrutement', href: '#recrutement' },
];

const scrollToSection = (
  event: ReactMouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  if (!href.startsWith('#')) {
    return;
  }

  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-heading__eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const handleLink = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setOpen(false);
    scrollToSection(event, href);
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="shell site-header__inner">
          <BrandLogo />

          <nav className="site-header__nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              className="header-contact"
              href="#contact"
              onClick={(event) => scrollToSection(event, '#contact')}
            >
              Nous contacter
              <ArrowUpRight size={17} />
            </a>

            <button
              type="button"
              className="mobile-menu-button"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24 }}
          >
            <nav aria-label="Navigation mobile">
              {navItems.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.href}
                  onClick={(event) => handleLink(event, item.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + index * 0.035 }}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                  <ArrowRight size={20} />
                </motion.a>
              ))}
              <a
                href="#contact"
                className="mobile-menu__contact"
                onClick={(event) => handleLink(event, '#contact')}
              >
                Parlons de votre projet
                <ArrowUpRight size={20} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__stripes" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="shell hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Cabinet RH à Chalon-sur-Saône
          </div>

          <h1>
            Une <span className="word-cyan">diversité</span>
            <br />
            de <span className="word-pink">compétences</span>
            <br />
            pour <span className="word-lime">agir.</span>
          </h1>

          <p className="hero__intro">
            Conseil, recrutement, formation et QHSE : une équipe
            pluridisciplinaire pour accompagner vos enjeux humains avec
            proximité, méthode et pragmatisme.
          </p>

          <div className="hero__actions">
            <a
              className="button button--dark"
              href="#expertises"
              onClick={(event) => scrollToSection(event, '#expertises')}
            >
              Découvrir nos expertises
              <ArrowDown size={18} />
            </a>
            <a
              className="button button--ghost"
              href="#contact"
              onClick={(event) => scrollToSection(event, '#contact')}
            >
              Échanger avec l'équipe
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-icon">
              <Award size={23} />
            </div>
            <p>
              <strong>Certifié Qualiopi</strong>
              <span>Actions de formation & bilans de compétences</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-label="Les expertises RH Conseil 71"
        >
          <div className="hero-visual__ring hero-visual__ring--outer" />
          <div className="hero-visual__ring hero-visual__ring--inner" />

          <motion.div
            className="hero-visual__center"
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>RH</span>
            <strong>Conseil</strong>
            <small>depuis 2004</small>
          </motion.div>

          <motion.div
            className="orbit-card orbit-card--rh"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <UsersRound size={18} />
            RH
          </motion.div>
          <motion.div
            className="orbit-card orbit-card--qvct"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <HeartPulse size={18} />
            QVCT
          </motion.div>
          <motion.div
            className="orbit-card orbit-card--qhse"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <HardHat size={18} />
            QHSE
          </motion.div>
          <motion.div
            className="orbit-card orbit-card--rse"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.7, repeat: Infinity }}
          >
            <Leaf size={18} />
            RSE
          </motion.div>

          <div className="hero-visual__metric">
            <strong>8</strong>
            <span>domaines d'expertise</span>
          </div>
        </motion.div>
      </div>

      <div className="shell hero-agenda">
        <div className="hero-agenda__label">
          <Sparkles size={16} />
          À la une
        </div>
        <p>
          Le catalogue de formations RH Conseil 71 est disponible en ligne.
        </p>
        <a
          href="https://rhconseil.catalogueformpro.com/"
          target="_blank"
          rel="noreferrer"
        >
          Voir le catalogue
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="stats-band" aria-label="Quelques repères">
      <div className="shell stats-band__grid">
        <Reveal className="stat">
          <span>01</span>
          <strong>2004</strong>
          <p>Création du cabinet</p>
        </Reveal>
        <Reveal className="stat" delay={0.06}>
          <span>02</span>
          <strong>8</strong>
          <p>Expertises complémentaires</p>
        </Reveal>
        <Reveal className="stat" delay={0.12}>
          <span>03</span>
          <strong>Qualiopi</strong>
          <p>Formation & bilan de compétences</p>
        </Reveal>
        <Reveal className="stat" delay={0.18}>
          <span>04</span>
          <strong>Sur mesure</strong>
          <p>Des réponses adaptées au terrain</p>
        </Reveal>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const activeService = useMemo(
    () => services.find((service) => service.id === activeId) ?? services[0],
    [activeId],
  );
  const ActiveIcon = iconMap[activeService.icon];

  return (
    <section className="expertise section" id="expertises">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Ce que nous faisons"
            title="Des expertises qui se répondent."
            text="Un même interlocuteur, plusieurs regards métiers. Sélectionnez une expertise pour découvrir les principaux accompagnements proposés."
          />
        </Reveal>

        <div className="expertise-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const active = activeId === service.id;

            return (
              <Reveal key={service.id} delay={index * 0.035}>
                <button
                  type="button"
                  className={`expertise-card${active ? ' is-active' : ''}`}
                  style={
                    {
                      '--service-color': service.color,
                      '--service-soft': service.softColor,
                    } as CSSProperties
                  }
                  onClick={() => setActiveId(service.id)}
                  aria-pressed={active}
                >
                  <span className="expertise-card__number">
                    {service.number}
                  </span>
                  <span className="expertise-card__icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <strong>{service.shortTitle}</strong>
                  <ChevronRight className="expertise-card__arrow" size={19} />
                </button>
              </Reveal>
            );
          })}
        </div>

        <div id="expertise-detail" className="expertise-detail">
          <AnimatePresence mode="wait">
            <motion.div
              className="expertise-detail__inner"
              key={activeService.id}
              style={
                {
                  '--service-color': activeService.color,
                  '--service-soft': activeService.softColor,
                } as CSSProperties
              }
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32 }}
            >
              <div className="expertise-detail__intro">
                <div className="expertise-detail__icon">
                  <ActiveIcon size={34} />
                </div>
                <span>{activeService.kicker}</span>
                <h3>{activeService.title}</h3>
                <p>{activeService.description}</p>
                <a
                  href="#contact"
                  onClick={(event) => scrollToSection(event, '#contact')}
                >
                  Parler à un consultant
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="expertise-detail__lists">
                <div>
                  <h4>Prestations</h4>
                  <ul>
                    {activeService.prestations.map((item) => (
                      <li key={item}>
                        <span>
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Formations associées</h4>
                  <ul>
                    {activeService.formations.map((item) => (
                      <li key={item}>
                        <span>
                          <GraduationCap size={14} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    className="expertise-detail__catalogue"
                    href="https://rhconseil.catalogueformpro.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Catalogue complet
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about section" id="cabinet">
      <div className="shell about__grid">
        <Reveal className="about__visual">
          <div className="about-collage">
            <div className="about-collage__main">
              <span className="about-collage__kicker">
                RH CONSEIL
                <strong>71</strong>
              </span>

              <div className="about-collage__quote">
                <span>“</span>
                <p>
                  La qualité fait partie intégrante de notre culture, au
                  bénéfice de nos clients.
                </p>
              </div>
            </div>

            <div className="about-collage__tile about-collage__tile--cyan">
              <Target size={30} />
              <span>Proximité</span>
            </div>
            <div className="about-collage__tile about-collage__tile--pink">
              <HandHeart size={30} />
              <span>Écoute</span>
            </div>
            <div className="about-collage__tile about-collage__tile--lime">
              <Sparkles size={30} />
              <span>Pragmatisme</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="about__content" delay={0.1}>
          <SectionHeading
            eyebrow="Le cabinet"
            title="À taille humaine. À la hauteur de vos enjeux."
          />

          <p className="about__lead">
            Créé en 2004, RH Conseil 71 accompagne les entreprises dans leur
            recherche de performance et le développement des compétences en
            ressources humaines, recrutement et QHSE.
          </p>
          <p>
            Notre approche associe expertise métier, compréhension du terrain
            et amélioration continue. Les missions sont portées par une équipe
            opérationnelle pluridisciplinaire et par des intervenants
            spécialisés lorsque le projet le nécessite.
          </p>

          <div className="about__features">
            <div>
              <Check size={17} />
              Conseil opérationnel
            </div>
            <div>
              <Check size={17} />
              Formations concrètes
            </div>
            <div>
              <Check size={17} />
              Accompagnement individuel
            </div>
            <div>
              <Check size={17} />
              Culture de l'amélioration continue
            </div>
          </div>

          <a
            className="text-link"
            href="#equipe"
            onClick={(event) => scrollToSection(event, '#equipe')}
          >
            Découvrir nos expertises métiers
            <ArrowDown size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="team section" id="equipe">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Une équipe complémentaire"
            title="Plusieurs disciplines. Une même exigence."
            text="Des expertises différentes pour regarder chaque problématique dans sa globalité et construire des réponses directement mobilisables."
            align="center"
          />
        </Reveal>

        <div className="team-grid">
          {teamRoles.map((role, index) => (
            <Reveal key={role.title} delay={index * 0.07}>
              <article
                className="team-card"
                style={{ '--role-color': role.color } as CSSProperties}
              >
                <div className="team-card__top">
                  <span>0{index + 1}</span>
                  <span className="team-card__line" />
                </div>
                <div className="team-card__avatar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <section className="training section" id="formations">
      <div className="shell">
        <div className="training__heading">
          <Reveal>
            <SectionHeading
              eyebrow="Organisme de formation"
              title="Des formations pensées pour le terrain."
              text="Des formats courts, concrets et opérationnels pour repartir avec des méthodes, des repères et des outils immédiatement mobilisables."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <a
              className="button button--light"
              href="https://rhconseil.catalogueformpro.com/"
              target="_blank"
              rel="noreferrer"
            >
              Voir toutes les formations
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>

        <div className="training-grid">
          {trainingHighlights.map((training, index) => (
            <Reveal key={training.title} delay={index * 0.045}>
              <article
                className="training-card"
                style={{ '--training-color': training.accent } as CSSProperties}
              >
                <div className="training-card__head">
                  <span>{training.category}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{training.title}</h3>
                <div className="training-card__meta">
                  <span>
                    <GraduationCap size={15} />
                    {training.format}
                  </span>
                  <span>
                    <Clock3 size={15} />
                    {training.duration}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="qualiopi-card">
          <div className="qualiopi-card__mark">
            <Award size={34} />
            <div>
              <span>Certification qualité</span>
              <strong>QUALIOPI</strong>
            </div>
          </div>

          <div className="qualiopi-card__copy">
            <p>
              La certification qualité a été délivrée au titre des catégories
              d'actions suivantes :
            </p>
            <div>
              <span>
                <Check size={15} />
                Actions de formation
              </span>
              <span>
                <Check size={15} />
                Bilans de compétences
              </span>
            </div>
          </div>

          <a href="#contact" onClick={(event) => scrollToSection(event, '#contact')}>
            Une question sur nos formations ?
            <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function IndividualsSection() {
  return (
    <section className="individuals section" id="particuliers">
      <div className="shell individuals__grid">
        <Reveal className="individuals__content">
          <SectionHeading
            eyebrow="Vous êtes un particulier ?"
            title="Donnez une direction claire à votre parcours."
            text="Un temps pour prendre du recul, mieux comprendre vos compétences et construire la prochaine étape professionnelle avec méthode."
          />

          <div className="individuals__steps">
            <div>
              <span>01</span>
              <div>
                <strong>Faire le point</strong>
                <p>
                  Clarifier votre situation, vos attentes, vos motivations et
                  vos priorités.
                </p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <strong>Explorer</strong>
                <p>
                  Identifier vos compétences, vos potentiels et des pistes
                  professionnelles réalistes.
                </p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <strong>Construire</strong>
                <p>
                  Transformer la réflexion en projet et en plan d'action
                  concret.
                </p>
              </div>
            </div>
          </div>

          <a
            className="button button--dark"
            href="#contact"
            onClick={(event) => scrollToSection(event, '#contact')}
          >
            Parler de mon projet
            <ArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal className="individuals__panel" delay={0.1}>
          <div className="individuals__panel-head">
            <Route size={30} />
            <span>Accompagnements</span>
          </div>

          <div className="individuals__service">
            <strong>Bilan de compétences</strong>
            <p>
              Identifier vos ressources, vos envies et les conditions de
              réussite d'une évolution professionnelle.
            </p>
          </div>
          <div className="individuals__service">
            <strong>Transition professionnelle</strong>
            <p>
              Structurer une mobilité, une reconversion ou un repositionnement
              en sécurisant chaque étape.
            </p>
          </div>
          <div className="individuals__service">
            <strong>Outplacement</strong>
            <p>
              Retrouver une dynamique et construire une stratégie de retour à
              l'emploi cohérente.
            </p>
          </div>

          <div className="individuals__certification">
            <Award size={19} />
            Bilans de compétences certifiés Qualiopi
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RecruitmentSection() {
  return (
    <section className="recruitment section" id="recrutement">
      <div className="shell">
        <Reveal className="recruitment__hero">
          <div className="recruitment__copy">
            <span className="recruitment__eyebrow">
              <BriefcaseBusiness size={18} />
              Recrutement
            </span>
            <h2>Le bon profil ne se résume pas à un CV.</h2>
            <p>
              Nous aidons les entreprises à clarifier leur besoin, évaluer les
              candidatures et sécuriser leur décision. Côté candidats, nous
              facilitons une rencontre plus lisible, plus humaine et plus
              durable.
            </p>
          </div>

          <div className="recruitment__flow" aria-label="Processus de recrutement">
            {[
              'Besoin',
              'Recherche',
              'Évaluation',
              'Décision',
              'Intégration',
            ].map((label, index) => (
              <div key={label}>
                <span>{index + 1}</span>
                <strong>{label}</strong>
                {index < 4 && <ArrowRight size={16} />}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="recruitment__cards">
          <Reveal>
            <article className="recruitment-card recruitment-card--company">
              <div className="recruitment-card__icon">
                <UsersRound size={27} />
              </div>
              <span>Vous recrutez</span>
              <h3>Sécurisons ensemble votre prochain recrutement.</h3>
              <p>
                Définition du besoin, sourcing, entretiens, évaluation et
                accompagnement de l'intégration.
              </p>
              <a
                href="#contact"
                onClick={(event) => scrollToSection(event, '#contact')}
              >
                Confier un recrutement
                <ArrowRight size={17} />
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="recruitment-card recruitment-card--candidate">
              <div className="recruitment-card__icon">
                <SearchCheck size={27} />
              </div>
              <span>Vous êtes candidat</span>
              <h3>Découvrez les opportunités confiées au cabinet.</h3>
              <p>
                Notre équipe vous accompagne dans un processus clair, avec une
                attention portée à votre parcours et à votre projet.
              </p>
              <a
                href="mailto:accueil@rhconseil71.com?subject=Candidature%20RH%20Conseil%2071"
              >
                Envoyer ma candidature
                <ArrowUpRight size={17} />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const company = String(data.get('company') ?? '');
    const email = String(data.get('email') ?? '');
    const need = String(data.get('need') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = encodeURIComponent(
      `Demande depuis le site — ${need || 'Projet RH'}`,
    );
    const body = encodeURIComponent(
      [
        `Nom : ${name}`,
        `Entreprise : ${company}`,
        `E-mail : ${email}`,
        `Besoin : ${need}`,
        '',
        message,
      ].join('\n'),
    );

    setSent(true);
    window.location.href = `mailto:accueil@rhconseil71.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="shell contact__grid">
        <Reveal className="contact__intro">
          <span className="contact__eyebrow">Parlons-nous</span>
          <h2>
            Votre prochain projet commence peut-être par une
            <span> conversation.</span>
          </h2>
          <p>
            Décrivez-nous votre besoin. Notre équipe vous orientera vers la
            bonne expertise et reviendra vers vous pour qualifier votre projet.
          </p>

          <div className="contact__details">
            <a href="tel:+33385421865">
              <span>
                <Phone size={20} />
              </span>
              <div>
                <small>Téléphone</small>
                <strong>03 85 42 18 65</strong>
              </div>
            </a>
            <a href="mailto:accueil@rhconseil71.com">
              <span>
                <Mail size={20} />
              </span>
              <div>
                <small>E-mail</small>
                <strong>accueil@rhconseil71.com</strong>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=75+Grande+Rue+Saint-Cosme+71100+Chalon-sur-Saone"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <MapPin size={20} />
              </span>
              <div>
                <small>Adresse</small>
                <strong>
                  75 Grande Rue Saint-Cosme
                  <br />
                  71100 Chalon-sur-Saône
                </strong>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.12}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label>
                <span>Nom & prénom *</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  required
                />
              </label>
              <label>
                <span>Entreprise</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Votre entreprise"
                />
              </label>
            </div>

            <label>
              <span>E-mail professionnel *</span>
              <input
                type="email"
                name="email"
                placeholder="vous@entreprise.fr"
                required
              />
            </label>

            <label>
              <span>Votre besoin *</span>
              <select name="need" defaultValue="" required>
                <option value="" disabled>
                  Sélectionnez une expertise
                </option>
                <option>Accompagnement RH</option>
                <option>Formation</option>
                <option>RSE</option>
                <option>Social / RGPD</option>
                <option>Management des carrières</option>
                <option>QHSE</option>
                <option>QVCT</option>
                <option>Recrutement</option>
                <option>Bilan de compétences</option>
                <option>Autre demande</option>
              </select>
            </label>

            <label>
              <span>Votre message *</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Parlez-nous de votre contexte, de votre besoin ou de votre projet..."
                required
              />
            </label>

            <button type="submit" className="button button--pink">
              Envoyer ma demande
              <ArrowUpRight size={18} />
            </button>

            <p className="contact-form__note">
              En envoyant ce formulaire, votre logiciel de messagerie s'ouvrira
              avec votre demande préremplie.
            </p>

            {sent && (
              <p className="contact-form__feedback" role="status">
                Votre message est prêt dans votre logiciel de messagerie.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__colorbar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="shell footer__main">
        <div className="footer__brand">
          <BrandLogo inverted />
          <p>
            Société de conseils et de services en Ressources Humaines,
            recrutement, formation et QHSE.
          </p>
          <a
            className="footer__linkedin"
            href="https://fr.linkedin.com/company/rh-conseil-71"
            target="_blank"
            rel="noreferrer"
            aria-label="RH Conseil 71 sur LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <div className="footer__nav">
          <strong>Navigation</strong>
          <a href="#cabinet">Le cabinet</a>
          <a href="#expertises">Nos expertises</a>
          <a href="#formations">Formations</a>
          <a href="#particuliers">Particuliers</a>
          <a href="#recrutement">Recrutement</a>
        </div>

        <div className="footer__nav">
          <strong>Expertises</strong>
          <a href="#expertises">Développement RH</a>
          <a href="#expertises">Social & RGPD</a>
          <a href="#expertises">QHSE</a>
          <a href="#expertises">QVCT</a>
          <a href="#expertises">RSE</a>
        </div>

        <div className="footer__contact">
          <strong>Nous contacter</strong>
          <a href="tel:+33385421865">03 85 42 18 65</a>
          <a href="mailto:accueil@rhconseil71.com">
            accueil@rhconseil71.com
          </a>
          <p>
            75 Grande Rue Saint-Cosme
            <br />
            71100 Chalon-sur-Saône
          </p>
        </div>
      </div>

      <div className="shell footer__bottom">
        <span>© {year} RH Conseil 71</span>
        <span>Une diversité de compétences pour agir.</span>
        <a href="mailto:accueil@rhconseil71.com?subject=Mentions%20l%C3%A9gales">
          Mentions légales
        </a>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <ExpertiseSection />
        <AboutSection />
        <TeamSection />
        <TrainingSection />
        <IndividualsSection />
        <RecruitmentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
