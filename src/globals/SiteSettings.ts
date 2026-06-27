import type { GlobalConfig } from 'payload'
import { isContentManager } from '@/lib/access/isContentManager'

/**
 * Site-wide settings consumed by the public chrome (Header/Footer). Keeps
 * contact details, navigation, and social links out of components and in the
 * CMS, so editors can change them without a deploy.
 */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
    update: isContentManager,
  },
  admin: {
    group: 'Configuration',
  },
  fields: [
    {
      type: 'group',
      name: 'contact',
      label: 'Contact',
      fields: [
        { name: 'phone', type: 'text', defaultValue: '+91-9643822021' },
        { name: 'email', type: 'text', defaultValue: 'ungistsolutions@gmail.com' },
        {
          name: 'address',
          type: 'textarea',
          defaultValue:
            '57/12, First Floor, Near Mithaiwala, Bada Bazar Road, Old Rajender Nagar, New Delhi 110060',
        },
      ],
    },
    {
      type: 'group',
      name: 'social',
      label: 'Social Links',
      fields: [
        { name: 'youtube', type: 'text', defaultValue: '#' },
        { name: 'instagram', type: 'text', defaultValue: '#' },
        { name: 'twitter', type: 'text', defaultValue: '#' },
        { name: 'facebook', type: 'text', defaultValue: '#' },
      ],
    },
    {
      type: 'array',
      name: 'primaryNav',
      label: 'Primary Navigation',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        { name: 'hasCaret', type: 'checkbox', defaultValue: false },
      ],
      defaultValue: [
        { label: 'CSAT Course', href: '/#pricing', hasCaret: false },
        { label: 'Products', href: '/#products', hasCaret: true },
        { label: 'Results', href: '/#results', hasCaret: false },
        { label: 'Resources', href: '/#resources', hasCaret: true },
        { label: 'Blog', href: '/blog', hasCaret: false },
      ],
    },
    {
      type: 'group',
      name: 'ctaGhost',
      label: 'Secondary CTA',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Start Your CSAT Diagnosis' },
        { name: 'href', type: 'text', defaultValue: '/#counselling' },
      ],
    },
    {
      type: 'group',
      name: 'ctaPrimary',
      label: 'Primary CTA',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Enroll Now' },
        { name: 'href', type: 'text', defaultValue: '/#pricing-pro' },
      ],
    },
    {
      name: 'footerTagline',
      type: 'textarea',
      defaultValue:
        "India's premier UPSC coaching institute. Empowering aspirants with expert mentorship, structured programs, and a proven track record of 800+ civil service selections.",
    },
    {
      type: 'array',
      name: 'footerColumns',
      label: 'Footer Columns',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          type: 'array',
          name: 'links',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
      defaultValue: [
        {
          title: 'Programs',
          links: [
            { label: 'Test Series', href: '/#courses' },
            { label: 'CSAT Book', href: '/#courses' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Current Affairs', href: '/#resources' },
            { label: 'Previous Year Papers', href: '/#resources' },
            { label: 'Study Materials', href: '/#resources' },
            { label: 'Strategy Guides', href: '/#resources' },
            { label: 'Answer Writing', href: '/#resources' },
            { label: 'Blog', href: '/blog' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About UNGIST', href: '/#about' },
            { label: 'Faculty Team', href: '/#faculty' },
            { label: 'Results', href: '/#results' },
            { label: 'Campus', href: '/#about' },
            { label: 'FAQs', href: '/#faq' },
            { label: 'Careers', href: '#' },
            { label: 'Contact Us', href: '/#footer' },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: "© 2026 UNGIST. All rights reserved. Empowering India's Civil Service Aspirants.",
    },
  ],
}
