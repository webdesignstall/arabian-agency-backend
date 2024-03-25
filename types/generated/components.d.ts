import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactUsContactUsFormTextList extends Schema.Component {
  collectionName: 'components_contact_us_contact_us_form_text_lists';
  info: {
    displayName: 'Contact us form text list';
  };
  attributes: {};
}

export interface TabTab1 extends Schema.Component {
  collectionName: 'components_tab_tab1s';
  info: {
    displayName: 'tab1';
    description: '';
  };
  attributes: {
    tabNameArabic: Attribute.String;
    englishContent: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    arabicContent: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    tabNameEnglish: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact-us.contact-us-form-text-list': ContactUsContactUsFormTextList;
      'tab.tab1': TabTab1;
    }
  }
}
