import React from 'react'
import type { SiteSetting } from '@/payload-types'

const IconMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
)
const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22.5 6.5a3 3 0 0 0-2.1-2.1C18.5 4 12 4 12 4s-6.5 0-8.4.4A3 3 0 0 0 1.5 6.5 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C5.5 20 12 20 12 20s6.5 0 8.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.5z" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
  </svg>
)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.24 2.25h3.27l-7.15 8.18 8.41 11.32h-6.58l-5.15-6.74-5.9 6.74H1.85l7.65-8.75L1.5 2.25h6.74l4.66 6.16zm-1.15 17.52h1.81L7.02 4.13H5.07z" />
  </svg>
)
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
)

export const Footer: React.FC<{ settings: SiteSetting }> = ({ settings }) => {
  const { contact, social, footerColumns, footerTagline, copyright } = settings

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ungist-logo.png" alt="UNGIST" />
            </div>
            <p>{footerTagline}</p>
            <div className="foot-addr">
              {contact?.address && (
                <p className="ci">
                  <IconMap />
                  {contact.address}
                </p>
              )}
              {contact?.phone && (
                <p className="ci">
                  <IconPhone />
                  {contact.phone}
                </p>
              )}
              {contact?.email && (
                <p className="ci">
                  <IconMail />
                  {contact.email}
                </p>
              )}
            </div>
            <div className="foot-soc">
              {social?.youtube && (
                <a href={social.youtube} aria-label="YouTube">
                  <IconYouTube />
                </a>
              )}
              {social?.instagram && (
                <a href={social.instagram} aria-label="Instagram">
                  <IconInstagram />
                </a>
              )}
              {social?.twitter && (
                <a href={social.twitter} aria-label="Twitter">
                  <IconTwitter />
                </a>
              )}
              {social?.facebook && (
                <a href={social.facebook} aria-label="Facebook">
                  <IconFacebook />
                </a>
              )}
            </div>
          </div>

          {(footerColumns ?? []).map((col, i) => (
            <div className="foot-col" key={i}>
              <h4>{col.title}</h4>
              {(col.links ?? []).map((link, j) => (
                <a href={link.href} key={j}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>{copyright}</span>
          <span className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
