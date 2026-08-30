'use client';

import { useState } from 'react';

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setForm({ name: '', company: '', email: '', message: '' });
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-surface-container-lowest border border-outline-variant rounded px-sm py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors';
  const labelClass = 'block font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-xs';

  if (status === 'success') {
    return (
      <div className="text-center py-lg">
        <div className="w-12 h-12 border-2 border-secondary-container rounded-full flex items-center justify-center mx-auto mb-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe6b00" strokeWidth="2.5" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Transmission Received</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Your inquiry has been logged. Our engineering team will respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-md">
      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-md' : 'flex flex-col gap-md'}>
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>Full Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contact-company" className={labelClass}>Company</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Rail Ltd."
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={labelClass}>Email Address *</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="john@acmerail.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClass}>Message *</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={compact ? 4 : 6}
          placeholder="Describe your project requirements..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="font-label-mono text-label-mono text-error border border-error/30 bg-error-container/30 px-sm py-xs rounded">
          ⚠ {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-secondary-container text-white font-button-text text-button-text py-sm px-lg rounded hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-sm self-start"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Transmitting...
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>
    </form>
  );
}
