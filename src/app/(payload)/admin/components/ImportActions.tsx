'use client'

import React, { useState } from 'react'
import { Button, useDocumentInfo } from '@payloadcms/ui'
import { useRouter } from 'next/navigation'

/**
 * Sidebar actions for an Import document: a two-step Validate → Run flow.
 * Nothing heavy runs automatically — the content manager explicitly triggers
 * validation (preview) and then, after reviewing, the actual import.
 */
export const ImportActions: React.FC = () => {
  const { id } = useDocumentInfo()
  const router = useRouter()
  const [busy, setBusy] = useState<'validate' | 'run' | null>(null)
  const [message, setMessage] = useState<string>('')

  if (!id) {
    return <p style={{ fontSize: 13, opacity: 0.7 }}>Save this import first, then validate the file.</p>
  }

  const call = async (action: 'validate' | 'run') => {
    setBusy(action)
    setMessage('')
    try {
      const res = await fetch(`/api/imports/${id}/${action}`, { method: 'POST' })
      const data = await res.json()
      if (!res.ok) {
        setMessage(data.error || 'Request failed')
      } else {
        setMessage(`Status: ${data.status}`)
        router.refresh()
      }
    } catch {
      setMessage('Request failed')
    } finally {
      setBusy(null)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Button
        buttonStyle="transparent"
        disabled={busy !== null}
        onClick={() => window.open(`/api/imports/${id}/template`, '_blank')}
      >
        Download Template
      </Button>
      <Button
        buttonStyle="secondary"
        disabled={busy !== null}
        onClick={() => call('validate')}
      >
        {busy === 'validate' ? 'Validating…' : 'Validate'}
      </Button>
      <Button buttonStyle="primary" disabled={busy !== null} onClick={() => call('run')}>
        {busy === 'run' ? 'Running…' : 'Run Import'}
      </Button>
      {message && <p style={{ fontSize: 13, margin: 0 }}>{message}</p>}
      <p style={{ fontSize: 12, opacity: 0.6, margin: 0 }}>
        Validate first to preview row counts and errors. Run Import creates the records.
      </p>
    </div>
  )
}

export default ImportActions
