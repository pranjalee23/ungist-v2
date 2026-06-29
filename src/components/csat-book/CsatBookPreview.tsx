import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow } from '@/components/ui/Eyebrow'

const BookPageMock = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-full h-full bg-white flex flex-col gap-2 overflow-hidden"
    style={{ padding: '16px 14px', fontSize: '6.5px', color: '#333', lineHeight: 1.5 }}
  >
    {children}
  </div>
)

const PageNum = ({ n }: { n: number }) => (
  <div style={{ textAlign: 'right', fontSize: '5px', color: '#999', marginTop: 'auto', paddingTop: '4px' }}>{n}</div>
)

export const CsatBookPreview = () => (
  <Section id="preview">
    <Container>
      <SectionHead center>
        <div className="reveal">
          <Eyebrow>Book Preview</Eyebrow>
          <h2 className="text-[36px] font-bold tracking-[-0.025em] mt-[18px]">Inside the Book</h2>
          <p className="text-muted text-[clamp(1.02rem,1.4vw,1.15rem)] mt-4 max-w-[560px] mx-auto">
            A look at how the content is structured — clean layouts, solved examples, and PYQ answer keys organised for efficient revision.
          </p>
        </div>
      </SectionHead>

      <div className="grid grid-cols-3 gap-4 max-[520px]:grid-cols-2">
        {/* Page 1: Theory chapter */}
        <div className="reveal">
          <div className="rounded-md overflow-hidden border border-border shadow-2 aspect-[3/4] bg-surface">
            <BookPageMock>
              {/* Chapter header */}
              <div style={{ background: '#444', color: '#fff', padding: '6px 10px', borderRadius: '4px', fontWeight: 700, fontSize: '7px', letterSpacing: '.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ background: '#fff', color: '#444', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '8px', flex: 'none' }}>7</span>
                Percentage
              </div>
              <div style={{ background: '#f0f0f0', padding: '3px 7px', borderRadius: '3px', fontWeight: 600, fontSize: '6.5px', marginTop: '4px' }}>7.1 Fraction values table</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '4px' }}>
                <tbody>
                  {[['1/1','100%','1/11','9 1/11%'],['1/2','50%','1/12','8 1/3%'],['1/3','33 1/3%','1/13','7 9/13%'],['1/4','25%','1/14','7 1/7%'],['1/5','20%','1/15','6 2/3%'],['1/6','16 2/3%','1/16','6 1/4%'],['1/10','10%','1/20','5%']].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ border: '0.5px solid #ddd', padding: '2px 4px', fontSize: '5.5px', textAlign: 'center' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ background: '#f0f0f0', padding: '3px 7px', borderRadius: '3px', fontWeight: 600, fontSize: '6.5px', marginTop: '6px' }}>7.2 Application</div>
              <div style={{ background: '#f8f9fa', border: '0.5px solid #e0e0e0', borderRadius: '3px', padding: '5px 7px', marginTop: '5px' }}>
                <div style={{ fontWeight: 700, fontSize: '6px' }}>Q1.</div>
                <div style={{ fontSize: '5.5px', color: '#444', marginTop: '2px', lineHeight: 1.4 }}>If 16⅔% of a number is added to the number itself, it becomes 1470. Find the original number.</div>
                <div style={{ fontSize: '5.5px', color: '#555', fontStyle: 'italic', marginTop: '2px' }}>Sol: 16⅔% = 1/6. So total = 7/6 of number = 1470 → number = 1260.</div>
              </div>
              <PageNum n={175} />
            </BookPageMock>
          </div>
          <div className="text-[.75rem] font-semibold text-muted mt-2.5 text-center tracking-[.03em] uppercase">
            THEORY CHAPTER — Ch. 7: Percentage
          </div>
        </div>

        {/* Page 2: PYQ questions */}
        <div className="reveal">
          <div className="rounded-md overflow-hidden border border-border shadow-2 aspect-[3/4] bg-surface">
            <BookPageMock>
              <div style={{ fontWeight: 700, fontSize: '6px', textAlign: 'center', letterSpacing: '.05em', textTransform: 'uppercase', padding: '4px', background: '#444', color: '#fff', borderRadius: '2px', marginTop: '4px' }}>Previous Year Solved Questions</div>
              <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {[
                  { year: '2003', q: 'Three flags of different colours. Codes by single, two (in sequence), or three flags. Max codes possible?', opts: ['(a) 6','(b) 9','(c) 15','(d) 18'] },
                  { year: '2003', q: 'Two-member committee: one male from 5, one female from 3. Mrs. A refuses to serve with Mr. B. Ways?', opts: ['(a) 11','(b) 12','(c) 13','(d) 14'] },
                  { year: '2004', q: 'Nine letters dropped in three letter boxes. How many ways?', opts: ['(a) 27','(b) 3⁹','(c) 9²','(d) 3⁹–3'] },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#f8f9fa', border: '0.5px solid #e0e0e0', borderRadius: '3px', padding: '5px 7px' }}>
                    <div style={{ fontWeight: 700, fontSize: '6px' }}>{i + 1}. [CSAT {item.year}]</div>
                    <div style={{ fontSize: '5.5px', color: '#444', marginTop: '2px', lineHeight: 1.4 }}>{item.q}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginTop: '3px' }}>
                      {item.opts.map((o, j) => <div key={j} style={{ fontSize: '5px', color: '#555' }}>{o}</div>)}
                    </div>
                  </div>
                ))}
              </div>
              <PageNum n={321} />
            </BookPageMock>
          </div>
          <div className="text-[.75rem] font-semibold text-muted mt-2.5 text-center tracking-[.03em] uppercase">
            PYQ SECTION — Permutation &amp; Combination
          </div>
        </div>

        {/* Page 3: Answer key */}
        <div className="reveal">
          <div className="rounded-md overflow-hidden border border-border shadow-2 aspect-[3/4] bg-surface">
            <BookPageMock>
              <div style={{ fontSize: '6px', color: '#777', fontWeight: 600, letterSpacing: '.04em', textAlign: 'right', marginBottom: '3px' }}>Number System</div>
              <div style={{ fontWeight: 700, fontSize: '6px', textAlign: 'center', letterSpacing: '.05em', textTransform: 'uppercase', padding: '4px', background: '#444', color: '#fff', borderRadius: '2px' }}>Answer Key</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '1.5px', marginTop: '4px' }}>
                {['1.(c)','2.(d)','3.(b)','4.(a)','5.(c)','6.(d)','7.(b)','8.(d)','9.(a)','10.(c)','11.(c)','12.(c)','13.(a)','14.(c)','15.(d)','16.(b)','17.(b)','18.(b)','19.(c)','20.(d)','21.(a)','22.(d)','23.(b)','24.(b)','25.(d)','26.(d)','27.(d)','28.(d)','29.(b)','30.(c)','31.(d)','32.(d)','33.(d)','34.(a)','35.(c)','36.(d)','37.(a)','38.(d)','39.(d)','40.(a)','41.(b)','42.(c)','43.(c)','44.(b)','45.(b)','46.(a)','47.(b)','48.(b)','49.(d)','50.(d)','51.(c)','52.(a)','53.(a)','54.(a)','55.(a)','56.(d)','57.(a)','58.(a)','59.(d)','60.(d)','61.(a)','62.(d)','63.(a)','64.(b)','65.(b)','66.(d)','67.(d)','68.(d)','69.(d)','70.(c)'].map((ans, i) => (
                  <div key={i} style={{ fontSize: '4.5px', textAlign: 'center' }}>{ans}</div>
                ))}
              </div>
              <PageNum n={43} />
            </BookPageMock>
          </div>
          <div className="text-[.75rem] font-semibold text-muted mt-2.5 text-center tracking-[.03em] uppercase">
            ANSWER KEY — Number System (263 PYQs)
          </div>
        </div>
      </div>
    </Container>
  </Section>
)
