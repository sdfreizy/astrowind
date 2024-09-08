import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Úvod',
      href: '/',
    },
    {
      text: 'Harmonogram',
      href: '/#features',
    },
    {
      text: 'Otázky a odpovědi',
      href: '/#faqs',
    },
  ],
};

export const footerData = {
  footNote: `
    <img class="h-5 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="~/assets/images/sdlogo.svg" alt="onWidget logo" loading="lazy"></img>
    <p>Vytvořeno <a class="text-blue-600 underline dark:text-muted" href="https://www.servis-design.cz/"> servisdesign</a> · Všechna práva vyhrazena</p>
  `,
};
