import { ReactElement, ReactNode } from "react";

export type TFact = {
  icon: ReactElement;
  title: string;
  text: ReactNode;
};

export type MenuLink = {
  title: string;
  linkTo: string;
};

export type TSocial = {
  url: string;
  icon: ReactElement;
};

export type IntroContent = {
  photoUrl: string;
  name: string;
  surname: string;
  subtitle: string;
  buttonsLinks: MenuLink[];
  socials: TSocial[];
};

export type StackTech = {
  name: string;
  description: string;
  icon: ReactElement;
};

type Image = {
  url: string;
  alt: string;
};

export type TProject = {
  name: string;
  description: string;
  techs: ListItem[];
  images: Image[];
  href?: string;
  showLink: boolean;
  reflect: boolean;
};

export type ListItem = {
  text: string;
  subList?: string[];
};

export type TExperience = {
  years: string;
  icon: ReactElement;
  title: string;
  company: string;
  descList: ListItem[];
};

export type TSkill = {
  title: string;
  exp?: string;
  icon: ReactElement;
  type: "small" | "medium" | "big";
};

export type SkillsSet = {
  current: TSkill[];
  fundamental: TSkill[];
  supplementary: TSkill[];
  other: TSkill[];
};

export type TReview = {
  avatar: ReactElement;
  text: string;
  author: string;
};

export type TContacts = {
  heading: string;
  text: ReactNode;
  socials: TSocial[];
};
