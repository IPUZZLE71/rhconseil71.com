export type IconName =
  | 'users'
  | 'graduation'
  | 'leaf'
  | 'shield'
  | 'route'
  | 'hardhat'
  | 'heart'
  | 'search';

export type Service = {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  kicker: string;
  description: string;
  color: string;
  softColor: string;
  icon: IconName;
  prestations: string[];
  formations: string[];
};

export const services: Service[] = [
  {
    id: 'rh',
    number: '01',
    shortTitle: 'Développement RH',
    title: 'Accompagnement et développement RH',
    kicker: 'Structurer, anticiper, développer',
    description:
      "Nous aidons les directions, responsables RH et managers à transformer leurs enjeux humains en plans d'action concrets, adaptés à leur organisation et à leurs métiers.",
    color: '#08AEB2',
    softColor: '#E7F8F7',
    icon: 'users',
    prestations: [
      'Classification des emplois et accompagnement CCNM',
      'Diagnostic GPEC / GEPP et volet industriel',
      'Politique de rémunération et bilan social individuel',
      'Externalisation du plan de développement des compétences',
      'Entretiens annuels et entretiens de parcours professionnels',
      "Processus d'intégration et parcours d'onboarding",
      "Création ou révision du livret d'accueil",
      'Indicateurs et tableaux de bord RH',
      'Transmission des compétences et tutorat',
      'Cartographie des emplois et des compétences',
    ],
    formations: [
      'Faire vivre la classification des emplois selon la CCNM',
      "L'entretien de parcours professionnel et l'entretien individuel",
      'Mener à bien les entretiens individuels',
      'Mettre en place des tableaux de bord RH efficaces',
    ],
  },
  {
    id: 'formation',
    number: '02',
    shortTitle: 'Formations',
    title: 'Formations professionnelles',
    kicker: 'Faire grandir les compétences',
    description:
      'Des formations opérationnelles, accessibles et directement transposables au quotidien, pensées pour les dirigeants, managers et équipes RH.',
    color: '#F2A81D',
    softColor: '#FFF5DE',
    icon: 'graduation',
    prestations: [
      'Formations RH et management',
      'Droit du travail et relations sociales',
      'Prévention des risques psychosociaux',
      'RSE et pratiques RH responsables',
      'RGPD appliqué aux ressources humaines',
      'Qualité, sécurité et environnement',
      'Parcours en présentiel ou à distance selon les sessions',
    ],
    formations: [
      'Classification des emplois',
      'Management et entretiens',
      'Pouvoir disciplinaire',
      'Élections professionnelles et CSE',
      'RSE et RH',
      'RGPD dans le cadre des ressources humaines',
    ],
  },
  {
    id: 'rse',
    number: '03',
    shortTitle: 'RSE',
    title: 'Responsabilité Sociétale des Entreprises',
    kicker: 'Donner du sens à la performance',
    description:
      "Nous accompagnons les entreprises dans l'appropriation des enjeux RSE, du diagnostic initial au pilotage d'une démarche structurée et concrète.",
    color: '#B8C900',
    softColor: '#F5F8D9',
    icon: 'leaf',
    prestations: [
      'Sensibilisation aux fondamentaux de la RSE',
      "Diagnostic de l'existant",
      "Définition d'une stratégie RSE",
      "Construction d'un plan d'actions adapté",
      'Mise en place des indicateurs de pilotage',
      'Outils de suivi et de communication',
      'Accompagnement autour des principes de l’ISO 26000',
    ],
    formations: [
      'RSE et RH : intégrer la RSE dans les pratiques RH du quotidien',
      'Sensibiliser les équipes aux enjeux de responsabilité sociétale',
    ],
  },
  {
    id: 'social-rgpd',
    number: '04',
    shortTitle: 'Social & RGPD',
    title: 'Social & protection des données',
    kicker: 'Sécuriser les pratiques',
    description:
      'Nous apportons des repères clairs pour aider les entreprises à maîtriser leurs obligations sociales et à protéger les données traitées dans le cadre des ressources humaines.',
    color: '#6857C9',
    softColor: '#F0EEFB',
    icon: 'shield',
    prestations: [
      'Audit social',
      'Contrats de travail et temps de travail',
      'Règlement intérieur et procédures disciplinaires',
      'Rupture du contrat de travail',
      'Fonctionnement du CSE et représentation du personnel',
      "Audit et accompagnement à la conformité RGPD",
      'Cartographie des traitements de données RH',
    ],
    formations: [
      'Les élections professionnelles et le renouvellement du CSE',
      'Le pouvoir disciplinaire en entreprise',
      'Le RGPD dans le cadre des ressources humaines',
      'Prévenir et traiter les situations de harcèlement',
    ],
  },
  {
    id: 'carrieres',
    number: '05',
    shortTitle: 'Carrières',
    title: 'Management des carrières',
    kicker: 'Éclairer les trajectoires',
    description:
      'Nous accompagnons les mobilités, transitions professionnelles et évolutions de carrière en croisant les besoins de la personne et ceux de l’organisation.',
    color: '#DB639A',
    softColor: '#FBEAF2',
    icon: 'route',
    prestations: [
      'Bilan professionnel et bilan de compétences',
      'Évaluation de mobilité interne et des potentiels',
      'Évaluation 360°',
      'Codéveloppement professionnel',
      'Analyse et échange de pratiques',
      'Outplacement et reclassement externe',
      'Accompagnement des transitions professionnelles',
    ],
    formations: [
      'Bien vivre la dernière partie de sa carrière',
      'Reconnaissance, sens et engagement au travail',
      'Développer les pratiques de feedback et de codéveloppement',
    ],
  },
  {
    id: 'qhse',
    number: '06',
    shortTitle: 'QHSE',
    title: 'Qualité, Hygiène, Sécurité, Environnement',
    kicker: 'Prévenir, structurer, améliorer',
    description:
      'Nous aidons les entreprises à structurer leurs systèmes de management, maîtriser les risques professionnels et faire vivre une culture durable de prévention.',
    color: '#ED6B35',
    softColor: '#FFF0E9',
    icon: 'hardhat',
    prestations: [
      'Systèmes de management sécurité MASE et ISO 45001',
      'Système de management environnement ISO 14001',
      'Système de management qualité ISO 9001',
      'Évaluation des risques et Document Unique',
      'Évaluation du risque chimique avec SEIRICH',
      'Diagnostic pénibilité',
      'Missions de référent sécurité',
      'Audits sécurité, qualité et environnement',
      'État des lieux réglementaire ICPE',
    ],
    formations: [
      'Évaluation des risques et Document Unique',
      'Risque chimique et utilisation de SEIRICH',
      'Responsabilités pénale et civile du dirigeant',
      'Prévention des risques liés à la coactivité',
      'Risque ATEX',
      'Animer la CSSCT',
    ],
  },
  {
    id: 'qvct',
    number: '07',
    shortTitle: 'QVCT',
    title: 'Qualité de Vie et des Conditions de Travail',
    kicker: 'Préserver les personnes et les collectifs',
    description:
      "Nous intervenons pour prévenir les risques psychosociaux, soutenir les collectifs de travail et aider l'entreprise à traiter avec méthode les situations sensibles.",
    color: '#D41369',
    softColor: '#FDEAF2',
    icon: 'heart',
    prestations: [
      'Évaluation des risques psychosociaux',
      "Diagnostic des facteurs de stress et plan d'actions",
      'Accompagnement des situations professionnelles sensibles',
      "Espaces d'écoute et de soutien",
      'Prévention des situations de harcèlement',
      'Accompagnement des collectifs et du dialogue au travail',
    ],
    formations: [
      'Prévenir les RPS en faveur de la QVCT',
      'Prévenir le harcèlement sexuel et moral',
      'Reconnaissance, sens et engagement au travail',
    ],
  },
  {
    id: 'recrutement',
    number: '08',
    shortTitle: 'Recrutement',
    title: 'Recrutement & intégration',
    kicker: 'Trouver la bonne rencontre',
    description:
      'Du cadrage du besoin à l’intégration, nous sécurisons le recrutement avec une approche structurée, humaine et adaptée au contexte de chaque entreprise.',
    color: '#00A6C7',
    softColor: '#E6F7FB',
    icon: 'search',
    prestations: [
      'Analyse du besoin et définition du profil',
      "Rédaction et diffusion de l'offre",
      'Sourcing et présélection',
      'Entretiens structurés',
      'Évaluation des candidatures',
      'Aide à la décision',
      'Prise de références selon les besoins',
      "Accompagnement de l'accueil et de l'intégration",
    ],
    formations: [
      'Structurer ses recrutements',
      'Conduire des entretiens de recrutement',
      "Réussir l'accueil et l'intégration des nouveaux collaborateurs",
    ],
  },
];

export const trainingHighlights = [
  {
    category: 'RH',
    title: 'Faire vivre la classification des emplois selon la CCNM',
    format: 'Présentiel',
    duration: '1 jour',
    accent: '#08AEB2',
  },
  {
    category: 'Management',
    title: "L'entretien de parcours professionnel et l'entretien individuel",
    format: 'Présentiel',
    duration: '1 jour',
    accent: '#F2A81D',
  },
  {
    category: 'Social',
    title: 'Le pouvoir disciplinaire en entreprise',
    format: 'Présentiel',
    duration: '1 jour',
    accent: '#6857C9',
  },
  {
    category: 'RGPD',
    title: 'Le RGPD dans le cadre des ressources humaines',
    format: 'Présentiel',
    duration: '1 jour',
    accent: '#D41369',
  },
  {
    category: 'RSE',
    title: 'RSE et RH : intégrer la RSE dans les pratiques du quotidien',
    format: 'Présentiel',
    duration: '1 jour',
    accent: '#B8C900',
  },
  {
    category: 'QVCT',
    title: 'Reconnaissance, sens et engagement au travail',
    format: 'Présentiel',
    duration: '1 jour',
    accent: '#DB639A',
  },
];

export const teamRoles = [
  {
    title: 'Psychologues du travail',
    text: 'Évaluation, accompagnement des parcours, QVCT, recrutement et situations sensibles.',
    color: '#D41369',
  },
  {
    title: 'Consultants RH',
    text: 'Organisation, compétences, classification, GEPP, rémunération et pratiques managériales.',
    color: '#08AEB2',
  },
  {
    title: 'Consultants QHSE',
    text: 'Prévention, audits, systèmes de management, qualité, sécurité et environnement.',
    color: '#B8C900',
  },
  {
    title: 'Juristes en droit social',
    text: 'Sécurisation des pratiques RH, relations sociales, droit du travail et RGPD.',
    color: '#6857C9',
  },
];
