'use client'

import React from 'react'
import type { Tab } from './ProductHeader'

const DATES = ['22 June 2026', '15 July 2026', '5 August 2026', '1 September 2026', '1 October 2026', '1 November 2026']

const ROWS = {
  comp: DATES.map((date) => ({
    date,
    tests: '26 Tests (10 FLT + 6 Sectional + 10 Topic)',
    price: '₹2,999',
  })),
  mock: DATES.map((date, i) => ({
    date,
    tests: i < 4 ? '10 Full-Length Mocks' : '5 Full-Length Mocks',
    price: '₹999',
  })),
} as const

const BatchTable = ({ tab }: { tab: Tab }) => (
  <div className="bpan on" id={`batch-${tab}`}>
    <table className="btbl">
      <thead>
        <tr>
          <th>Batch</th>
          <th>Start Date</th>
          <th>Tests</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {ROWS[tab].map((r, i) => (
          <tr key={r.date}>
            <td>
              <div className="bname">Batch {i + 1}</div>
            </td>
            <td>{r.date}</td>
            <td>
              <div className="btc">{r.tests}</div>
            </td>
            <td>
              <div className="btp">{r.price}</div>
            </td>
            <td>
              <div className="bta">
                <a href="https://course.ungist.com" className="btn bp bsm">
                  Buy Online
                </a>
                <a href="#" className="btn bg bsm">
                  Brochure
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export const Batches = ({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) => (
  <section className="sec" id="batches">
    <div className="w">
      <div className="sh rv">
        <span className="ey">Batches</span>
        <h2>Choose your batch and enrol.</h2>
        <p>Both plans run on independent batch schedules. Later batches have fewer mocks as Prelims approaches.</p>
      </div>
      <div className="btabs rv">
        <button className={`bttb${tab === 'comp' ? ' on' : ''}`} onClick={() => setTab('comp')}>
          Comprehensive — ₹2,999
        </button>
        <button className={`bttb${tab === 'mock' ? ' on' : ''}`} onClick={() => setTab('mock')}>
          Mock Only — ₹999
        </button>
      </div>
      <BatchTable tab={tab} />
    </div>
  </section>
)

export default Batches
