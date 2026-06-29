import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

const BookIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
const UsersIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
const ChatIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
const WifiIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
const PinIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
const ClockIco = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>

const FEATURES = [
  { icon: <BookIco />, title: 'Premium Classrooms', desc: 'AC-equipped smart classrooms with modern AV systems' },
  { icon: <UsersIco />, title: 'Small Batch Sizes', desc: 'Max 40 students per batch for personalized attention' },
  { icon: <ChatIco />, title: 'Daily Doubt Sessions', desc: 'Dedicated faculty available for 1-on-1 doubt resolution' },
  { icon: <BookIco />, title: 'UPSC Library', desc: 'Extensive collection of books, magazines, and reference materials' },
  { icon: <WifiIco />, title: 'Digital Integration', desc: 'Hybrid access — attend online if you miss a class' },
  { icon: <UsersIco />, title: 'Peer Learning Groups', desc: 'Structured study groups with topper-led discussions' },
]

const INFO = [
  { lbl: 'Address', val: '57/12, First Floor, Near Mithaiwala, Bada Bazar Road, Old Rajender Nagar, New Delhi 110060' },
  { lbl: 'Nearest Metro', val: 'Karol Bagh Metro Station (Blue Line) — 8 min walk' },
  { lbl: 'Timing', val: 'Monday to Saturday, 9:00 AM – 7:00 PM' },
  { lbl: 'Contact', val: '+91-9643822021 | ungistsolutions@gmail.com' },
]

export const Campus = () => (
  <Section id="about">
    <Container>
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-start max-lg:grid-cols-1">
        {/* Left column */}
        <div className="reveal">
          <div className="max-w-[680px]">
            <Eyebrow>Our Institute</Eyebrow>
            <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Where Toppers Are Made</h2>
          </div>
          <div className="flex items-center gap-[7px] text-muted text-[14px] mt-3.5">
            <span className="w-4 h-4 text-violet flex-none"><PinIco /></span>
            Old Rajender Nagar, New Delhi — 110060
          </div>
          <p className="text-muted text-[15px] mt-[18px] leading-[1.6] max-w-[480px]">
            Our Old Rajender Nagar centre is located at the heart of Delhi&apos;s coaching hub. Designed
            for focused UPSC preparation, the campus provides a distraction-free, academically
            enriching environment.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-7">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="border border-border rounded-[18px] p-[18px] flex gap-[13px] items-start transition-[border-color,box-shadow] duration-300 hover:border-[#E2D3F6] hover:shadow-[0_4px_20px_rgba(20,12,40,0.1)]"
              >
                <span className="w-[38px] h-[38px] rounded-[11px] bg-lavender text-violet grid place-items-center flex-none">
                  {f.icon}
                </span>
                <div>
                  <div className="font-bold text-[14px] text-ink">{f.title}</div>
                  <div className="text-[13px] text-muted mt-1 leading-[1.5]">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-[18px] mt-[30px] flex-wrap">
            <span className="inline-flex items-center gap-[7px] text-[14px] text-muted">
              <ClockIco />
              or visit us · Mon–Sat, 9 AM – 7 PM
            </span>
          </div>
        </div>

        {/* Right: info card */}
        <div className="reveal rounded-[32px] overflow-hidden border border-border">
          <div className="relative bg-[linear-gradient(160deg,#F1E9FD_0%,#FBF9FE_100%)] pt-10 pb-10 px-6 text-center overflow-hidden">
            {/* Pulse rings */}
            <span className="absolute top-10 left-1/2 -ml-8 w-16 h-16 rounded-full border border-violet [animation:campusPulse_2.6s_ease-out_infinite] pointer-events-none" />
            <span className="absolute top-10 left-1/2 -ml-8 w-16 h-16 rounded-full border border-violet [animation:campusPulse_2.6s_ease-out_0.9s_infinite] pointer-events-none" />

            <span className="relative z-[1] w-16 h-16 rounded-[18px] bg-white border-[1.5px] border-violet text-violet grid place-items-center mx-auto mb-3.5 [&_svg]:w-[26px] [&_svg]:h-[26px]">
              <PinIco />
            </span>
            <div className="relative z-[1] font-bold text-[17px] tracking-[0.03em] uppercase text-ink">UNGIST</div>
            <div className="relative z-[1] text-[14px] text-muted mt-1">Old Rajender Nagar, New Delhi</div>
          </div>

          <div className="bg-white px-[26px] py-7 grid gap-[18px]">
            {INFO.map((r) => (
              <div key={r.lbl} className="grid grid-cols-[108px_1fr] gap-3">
                <div className="text-[13px] font-bold text-violet">{r.lbl}</div>
                <div className="text-[14px] text-[#3a4047] leading-[1.5]">{r.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </Section>
)

export default Campus
